import { writeFile } from 'node:fs/promises';

const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
const target = targets.find((item) => item.url === 'http://127.0.0.1:4173/');
if (!target) throw new Error('Preview browser target not found');

const ws = new WebSocket(target.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
ws.onmessage = ({ data }) => {
  const message = JSON.parse(data);
  if (message.id && pending.has(message.id)) {
    pending.get(message.id)(message);
    pending.delete(message.id);
  }
};
await new Promise((resolve, reject) => {
  ws.onopen = resolve;
  ws.onerror = reject;
});
const send = (method, params = {}) => new Promise((resolve) => {
  const requestId = ++id;
  pending.set(requestId, resolve);
  ws.send(JSON.stringify({ id: requestId, method, params }));
});

await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await send('Runtime.evaluate', { expression: "document.querySelector('.hamburger').click()" });
await new Promise((resolve) => setTimeout(resolve, 500));
const result = await send('Runtime.evaluate', {
  returnByValue: true,
  expression: `JSON.stringify({
    logo: document.querySelector('.drawer-head .brand-logo')?.getAttribute('src'),
    drawerDisplay: getComputedStyle(document.querySelector('.mobile-drawer')).display,
    drawerPosition: getComputedStyle(document.querySelector('.mobile-drawer')).position,
    drawerHeight: document.querySelector('.mobile-drawer')?.getBoundingClientRect().height,
    viewportHeight: innerHeight,
    visibleLinks: [...document.querySelectorAll('.drawer-links > a, .drawer-links > div > button')].filter(el => {
      const style = getComputedStyle(el); const rect = el.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) > 0 && rect.height > 0;
    }).map(el => el.textContent.trim())
  })`,
});
const screenshot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
await writeFile('mobile-menu-fixed.png', Buffer.from(screenshot.result.data, 'base64'));
console.log(result.result.result.value);
ws.close();
