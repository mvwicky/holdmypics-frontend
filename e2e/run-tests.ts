import * as path from "path";
import * as util from "util";

import chalk from "chalk";
import cypress from "cypress";
import execa from "execa";
import * as fse from "fs-extra";
import fetch from "node-fetch";
import yargs from "yargs";

const YARN_ARGS = ["--silent", "run"];

const { CERTFILE, KEYFILE, HOST, PORT } = process.env;

const LEVELS = {
  error: chalk.red,
  warn: chalk.yellow,
  info: chalk.white,
} as const;
type LevelName = keyof typeof LEVELS;

const WIDTH = Math.max(...Object.keys(LEVELS).map((k) => k.length));

const levelString = (level: LevelName) => {
  const padLen = WIDTH - level.length;
  const pad = padLen > 0 ? Array(padLen).fill(" ").join("") : "";
  const style = LEVELS[level];
  return chalk.magenta`[${style(level.toUpperCase())}${pad}]`;
};

const fmtOpts: util.InspectOptions = {
  colors: true,
  showHidden: false,
  showProxy: false,
};

const logger = (level: LevelName) => {
  const style = LEVELS[level];
  const prefix = levelString(level);
  return (...msgs: unknown[]) => {
    let msg: string;
    if (msgs.length > 1 && typeof msgs[0] === "string") {
      msg = util.formatWithOptions(fmtOpts, msgs[0], ...msgs.slice(1));
      console.log();
    } else {
      msg = style(...msgs);
    }
    console.log(prefix, msg);
  };
};

const info = logger("info");
const error = logger("error");
const warn = logger("warn");

async function pingServer(url: string) {
  const res = await fetch(url);
  return res;
}

async function goodServerResponse(url: string): Promise<boolean> {
  try {
    const res = await pingServer(url);
    return res.status === 200;
  } catch (e: unknown) {
    if (e instanceof Error) {
      warn(e.message);
    }
    return false;
  }
}

async function isFile(file?: string): Promise<boolean> {
  let exists: boolean;
  if (file) {
    exists = await fse.pathExists(path.resolve(file));
  } else {
    exists = false;
  }
  return exists;
}

function sleep(duration: number) {
  const start = Date.now();
  info(`Sleeping for ${duration}ms`);
  while (Date.now() - start < duration) {
    // Nothing
  }
}

async function waitForServer(
  url: URL,
  delay: number = 1000,
  max_tries: number = 5,
) {
  const _url = url.toString();
  let goodResponse = await goodServerResponse(_url);
  let badResponses = 0;
  while (goodResponse === false) {
    badResponses += 1;
    info(`Waiting for server to be ready. (${badResponses})`);
    sleep(delay);
    goodResponse = await goodServerResponse(_url);
    if (badResponses > max_tries - 1) {
      return false;
    }
  }
  return true;
}

async function getServer(buildDir: string) {
  const buildDirExists = await fse.pathExists(buildDir);
  if (!buildDirExists) {
    warn("No build directory.");
  }
  const serverArgs = ["sirv", buildDir, "--dev"];
  const [certExists, keyExists] = await Promise.all([
    isFile(CERTFILE),
    isFile(KEYFILE),
  ]);
  const url = new URL(`http://${HOST ?? "localhost"}:${PORT ?? "8081"}/`);
  if (CERTFILE && certExists && KEYFILE && keyExists) {
    serverArgs.push("--http2", "--key", KEYFILE, "--cert", CERTFILE);
    url.protocol = "https";
  }
  info(`Starting server`);
  const server = execa("yarn", YARN_ARGS.concat(serverArgs));
  return {
    url,
    proc: server,
    stop: () => {
      info("Stopping Server");
      server.cancel();
    },
  };
}

yargs(process.argv.slice(2)).command(
  "$0",
  "Run them tests.",
  (y) => {
    return y.options({
      tries: {
        type: "number",
        default: 5,
        desc: "The number of times to retry the server check.",
      },
      delay: {
        type: "number",
        default: 1000,
        desc: "The number of milliseconds between server checks.",
      },
      headless: {
        type: "boolean",
        default: true,
        desc: "Run tests with the browser hidden.",
      },
      browser: {
        type: "string",
        default: "electron",
        desc: "The name of or the path to a browser.",
        alias: "b",
      },
      quiet: {
        type: "boolean",
        default: false,
        desc: "The quiet option from Cypress",
      },
    });
  },
  async (argv) => {
    const buildDir = path.resolve(__dirname, "../site/build");
    info(`Build Directory: ${buildDir}`);
    const server = await getServer(buildDir);
    sleep(1000);
    const serverReady = await waitForServer(server.url, argv.delay, argv.tries);
    if (serverReady) {
      info("Server Ready");
      info("Starting tests");
      const testOpts: Partial<CypressCommandLine.CypressRunOptions> = {
        headless: argv.headless,
        browser: argv.browser,
        quiet: argv.quiet,
      };
      info("%O", testOpts);
      const tests = cypress.run(testOpts);
      try {
        await tests;
      } catch (e) {
        error("Error running tests.");
        console.error(e);
      }
    }
    server.stop();
  },
).argv;
