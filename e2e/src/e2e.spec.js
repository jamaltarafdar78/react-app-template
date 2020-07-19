beforeAll(async () => {
    await page.goto('http://localhost:8080/');
});

test('should display "Todo App with Redux" text on page', async () => {
    const browser = await page.$eval('h2', el => el.innerHTML);
    expect(browser).toContain('Todo App with Redux');
});
