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
    for (const language of ['en', 'ar']) {
      if (language === 'ar') await page.locator('#lang-switch').click();
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${language} overflows`);
    }
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
    console.log('Browser interaction checks passed');
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
