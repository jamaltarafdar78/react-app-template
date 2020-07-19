const playwright = require('playwright');

(async devicesToTest => {
    for (const device of devicesToTest) {
        for (const browserType of ['webkit']) {
            const browser = await playwright[browserType].launch();

            const context = await browser.newContext({
                ...device,
            });

            const page = await context.newPage();
            await page.goto('http://localhost:8080/');

            await page.screenshot({
                path: `./xbrowser/screenshots/${browserType}-${device.id}.png`,
                fullPage: true,
            });

            await browser.close();
        }
    }
})([
    {
        ...playwright.devices['iPad (gen 7) landscape'],
        id: 'iPad_landscape_gen7',
    },
    { ...playwright.devices['iPhone X'], id: 'iPhoneX' },
]);
