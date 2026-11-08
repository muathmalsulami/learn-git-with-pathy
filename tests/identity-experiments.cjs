const { chromium } = require('playwright');
const { createServer } = require('node:http');
const { readFile } = require('node:fs');
const { join, extname } = require('node:path');
const assert = require('node:assert/strict');
const root = process.cwd();
const server = createServer((request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  const file = join(root, pathname.endsWith('/') ? pathname + 'index.html' : pathname);
  if (!file.startsWith(root)) return response.writeHead(403).end();
  readFile(file, (error, body) => {
    if (error) return response.writeHead(404).end();
    response.setHeader('Content-Type', ({ '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml' })[extname(file)] || 'application/octet-stream');
    response.end(body);
  });
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true, ...(process.env.PORTFOLIO_BROWSER ? { executablePath: process.env.PORTFOLIO_BROWSER } : {}) });
  try {
    for (const concept of ['flow', 'facet']) {
      const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, hasTouch: true });
      const errors = []; page.on('pageerror', error => errors.push(error.message));
      await page.goto(`http://127.0.0.1:${server.address().port}/experiments/${concept}/`);
      await page.waitForTimeout(2100);
      const art = page.locator('.signature-art'), line = page.locator('.thread-2'), mark = page.locator('.signature-button');
      const box = await art.boundingBox(), before = await line.getAttribute('d');
      await page.mouse.move(box.x + box.width * .2, box.y + box.height * .3);
      await page.mouse.move(box.x + box.width * .75, box.y + box.height * .7, { steps: 15 });
      await page.waitForTimeout(300); assert.notEqual(await line.getAttribute('d'), before, 'Pointer should deform a path');
      await page.mouse.move(0, 0); await page.waitForTimeout(1800);
      const rest = await line.getAttribute('d');
      await mark.focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(850);
      assert.notEqual(await line.getAttribute('d'), rest, 'Keyboard should trigger discovery');
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.waitForFunction(() => document.querySelector('.signature-button').disabled);
      for (const width of [320,360,390,430,768,1024,1440,1920]) {
        await page.setViewportSize({ width, height: 900 }); await page.waitForTimeout(400);
        for (const language of ['en','ar']) {
          if (await page.locator('html').getAttribute('lang') !== language) await page.locator('#lang-switch').click();
          assert(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${concept}: ${language} at ${width}px`);
        }
      }
      assert.deepEqual(errors, []); await page.close();
      const touch = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true });
      await touch.goto(`http://127.0.0.1:${server.address().port}/experiments/${concept}/`);
      await touch.waitForTimeout(2100);
      const touchLine = touch.locator('.thread-2');
      const touchRest = await touchLine.getAttribute('d');
      await touch.locator('.signature-button').tap(); await touch.waitForTimeout(850);
      assert.notEqual(await touchLine.getAttribute('d'), touchRest, 'Touch should trigger discovery');
      await touch.close();
    }
    console.log('Experimental identity checks passed');
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });

