import { test, expect } from '@playwright/test';

// Before Each
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // first get anf fill the email field selector
    await page.locator('#user-name').fill(credentials[0].user_name);
    // second get anf fill the email field selector
    await page.locator('#password').fill(credentials[0].pass_word);
    // now click to login/submit button
    await page.locator('#login-button').click();

    await page.waitForURL('https://www.saucedemo.com/inventory.html');

    // Expecting the given URL
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.waitForTimeout(6000);
});

// Checking for Title
test.describe('Title', () => {
    test('Should match the title', async ({ browser }) => {
        const fresh_browser = await browser.newContext();
        const newPage = await fresh_browser.newPage();
        await newPage.goto('https://www.saucedemo.com/');

        await newPage.waitForTimeout(7000);
        // const title = await newPage.title();
        await expect(newPage).toHaveTitle('Swag Labs');
    });
});

// Login-Credentails
const credentials = [
    {
        user_name: 'standard_user',
        pass_word: 'secret_sauce'
    },
    {
        user_name: 'locked_out_user',
        pass_word: 'secret_sauce'
    },
    {
        user_name: 'problem_user',
        pass_word: 'secret_sauce'
    },
    {
        user_name: 'performance_glitch_user',
        pass_word: 'secret_sauce'
    },
];

// Login
test.describe('Login', () => {
    test('Login should happen', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        // first get anf fill the email field selector
        await page.locator('#user-name').fill(credentials[0].user_name);
        // second get anf fill the email field selector
        await page.locator('#password').fill(credentials[0].pass_word);
        // now click to login/submit button
        await page.locator('#login-button').click();

        await page.waitForURL('https://www.saucedemo.com/inventory.html');

        // Expecting the given URL
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        await page.waitForTimeout(6000);
    });
});
