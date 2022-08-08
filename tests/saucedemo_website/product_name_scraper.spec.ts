'use strict'
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
    await page.locator('#user-name').fill(credentials[0].user_name);
    // second get anf fill the email field selector
    await page.locator('#password').fill(credentials[0].pass_word);
    // now click to login/submit button
    await page.locator('#login-button').click();

    await page.waitForURL('https://www.saucedemo.com/inventory.html');

    // Expecting the given URL
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.waitForTimeout(3000);
});

// Product Name
test.describe('Scrape Product Name', () => {
    test('Should scrape all product name', async ({ page }) => {
        // Selector of product's name
        const products_elements = page.locator('.inventory_item_name');
        const products_Name = await products_elements.allInnerTexts();
        // loop over product name as it returned an ARRAY
        let counter = 1;
        for (let names of products_Name) {
            let data = `Product Number ${counter}: ${names}`;
            console.log(data);
            counter++;
        }
    });
});

// Filter on product name
test.describe('Scrape Product Name according to filter', () => {
    test('Should scrape only filtered product name', async ({ page }) => {
        // Selector of product's name
        const products_elements = page.locator('.inventory_item_name', { hasText: 'T-Shirt' });
        const products_Name = await products_elements.allInnerTexts();
        // loop over product name as it returned an ARRAY
        let counter = 1;
        for (let names of products_Name) {
            let data = `Product Number ${counter}: ${names}`;
            console.log(data);
            counter++;
        }
    });
});


// Scraper all the images source url
test.describe('Scrape image URL',()=>{
    test.only('Image URL',async({page})=>{
        const img_selector = page.locator('[alt="Sauce Labs Backpack"]');
        const images = img_selector.getAttribute('src');
        // document.write(`<li>${img_selector}`)
        console.log(images);
    });
});
