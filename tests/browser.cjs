const { chromium } = require('playwright');
const { createServer } = require('node:http');
const { readFile } = require('node:fs');
const { join, extname } = require('node:path');
const assert = require('node:assert/strict');
const root = process.cwd();
const server = createServer((request, response) => {
  const route = new URL(request.url, 'http://localhost').pathname;
  const file = join(root, route === '/' ? 'index.html' : route);
  if (!file.startsWith(root)) return response.writeHead(403).end();
  readFile(file, (error, body) => {
    if (error) return response.writeHead(404).end();
    const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };
    response.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
    response.end(body);
  });
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch({ headless: true, ...(process.env.PORTFOLIO_BROWSER ? { executablePath: process.env.PORTFOLIO_BROWSER } : {}) });
  try {
    const page = await browser.newPage({ viewport: { width: 320, height: 800 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(url);
    for (const width of [320, 360, 390, 430, 768, 1024, 1440, 1920]) {
      await page.setViewportSize({ width, height: 900 });
      for (const language of ['en', 'ar']) {
        if (await page.locator('html').getAttribute('lang') !== language) await page.locator('#lang-switch').click();
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${language} overflows at ${width}px`);
      }
    }
    await page.setViewportSize({ width: 320, height: 800 });
    await page.locator('#menu-button').click();
    assert.equal(await page.locator('#menu-button').getAttribute('aria-expanded'), 'true');
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#menu-button').getAttribute('aria-expanded'), 'false');
    await page.locator('[data-filter=systems]').click();
    assert.equal(await page.locator('.project-card:visible').count(), 1);
    await page.locator('[data-open-project=monitoring]').click();
    await page.locator('#dialog-language').click();
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
    assert((await page.locator('#dialog-title').textContent()).includes('Monitoring'));
    await page.keyboard.press('Escape');
    assert.equal(await page.evaluate(() => document.activeElement.dataset.openProject), 'monitoring');
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
    assert.deepEqual(errors, []);
    const noScript = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    await noScript.goto(url);
    assert(await noScript.locator('#site-nav a').first().isVisible());
    assert.equal(await noScript.locator('#contact-actions a').count(), 2);
    const pointerPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await pointerPage.goto(url);
    const art = pointerPage.locator('.hero-art');
    const box = await art.boundingBox();
    await pointerPage.mouse.move(box.x + box.width * .2, box.y + box.height * .3);
    await pointerPage.waitForFunction(() => !!document.querySelector('.hero-art').style.getPropertyValue('--parallax-x'));
    const first = await art.evaluate(node => node.style.getPropertyValue('--parallax-x'));
    await pointerPage.mouse.move(box.x + box.width * .8, box.y + box.height * .7);
    await pointerPage.waitForFunction(value => document.querySelector('.hero-art').style.getPropertyValue('--parallax-x') !== value, first);
    await pointerPage.mouse.move(0, 0);
    await pointerPage.waitForFunction(() => document.querySelector('.hero-art').style.getPropertyValue('--parallax-x') === '0px');
    await pointerPage.emulateMedia({ reducedMotion: 'reduce' });
    await pointerPage.waitForFunction(() => document.querySelector('.hero-art').style.getPropertyValue('--parallax-y') === '0px');
    await pointerPage.close();
    console.log('Browser interaction checks passed');
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
