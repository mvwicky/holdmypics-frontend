/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from 'canvas-confetti';

const canvas = document.getElementById('canvas');
if (canvas !== null && canvas.nodeName.toLowerCase() == 'canvas') {
  confetti.create(canvas as HTMLCanvasElement, {
    resize: true,
    useWorker: true,
  })({ particleCount: 200, spread: 200 });
}
