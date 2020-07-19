const playwright = require('playwright');

(async () => {
    for (const browserType of ['chromium', 'firefox', 'webkit']) {
        const browser = await playwright[browserType].launch();

        const context = await browser.newContext();

        const page = await context.newPage();
        await page.goto('http://localhost:8080/');

        await page.screenshot({
            path: `./xbrowser/screenshots/${browserType}.png`,
            fullPage: true,
        });

        await browser.close();
    }
})();
