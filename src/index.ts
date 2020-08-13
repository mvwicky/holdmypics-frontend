/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { html, render } from "lit-html";
// import tippyjs from "tippy.js";

const dataUrl = new URL("https://holdmypics.com/");

(async function () {
  const main = document.getElementById("main");
  if (main !== null) {
    const data = await getData();
    if (data !== null) {
      initMain(main, data);
    }
  }
});

async function getData(): Promise<object | null> {
  const headers = new Headers({ Accept: "application/json" });
  try {
    const res = await fetch(dataUrl.href, { headers });
    return res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}

function initMain(elem: HTMLElement, data: object) {
  const template = html``;

  render(template, elem);
}
