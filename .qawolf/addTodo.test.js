const qawolf = require('qawolf');

let browser;
let page;

beforeAll(async () => {
    browser = await qawolf.launch();
    const context = await browser.newContext();
    await qawolf.register(context);
    page = await context.newPage();
});

afterAll(async () => {
    await qawolf.stopVideos();
    await browser.close();
});

test('addTodo', async () => {
    await page.goto('http://localhost:8080/');
    await page.click('input');
    await page.click('input');
    await page.fill('input', 'add new todo');
    await page.click('text=Add');
    await page.click('text=add new todo >> css=input');
});
