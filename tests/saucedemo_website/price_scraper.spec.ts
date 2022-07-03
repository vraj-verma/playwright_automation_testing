import { test, expect } from '@playwright/test';

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

// Log In before each test run
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // first get anf fill the email field selector
    await page.locator('#user-name').fill(credentials[2].user_name);
    // second get anf fill the email field selector
    await page.locator('#password').fill(credentials[0].pass_word);
    // now click to login/submit button
    await page.locator('#login-button').click();

    await page.waitForURL('https://www.saucedemo.com/inventory.html');

    // Expecting the given URL
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.waitForTimeout(3000);
});

// Price Scrape
test.describe('Will scrape the price of all products', () => {
    test('Scrape price',async({page})=>{
        // Price selector
        const price_element = page.locator('.inventory_item_price');
        const price = await price_element.allInnerTexts();
        for(let p of price){
            console.log(p);
        }
    });
});