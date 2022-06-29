import { test, expect } from '@playwright/test';

test.describe('Login Test', () => {
    test('Should match the title', async ({ browser }) => {
        const fresh_browser = await browser.newContext();
        const newPage = await fresh_browser.newPage();
        await newPage.goto('https://www.saucedemo.com/');

        await newPage.waitForTimeout(7000);
        // const title = await newPage.title();
        await expect(newPage).toHaveTitle('Swag Labs');
    })
})