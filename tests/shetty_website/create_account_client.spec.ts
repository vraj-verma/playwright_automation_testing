import { test, expect } from '@playwright/test';

test.describe('Creating a new account', () => {
    test('Should create a new account', async ({ page }) => {
        // Navigate to the given URL
        await page.goto('https://rahulshettyacademy.com/client');
        expect(page.url()).toBe('https://rahulshettyacademy.com/client/auth/login');
        console.log('Landed on correct page.');

        // Click on 'register now'
        const register_link = await page.locator('[href="/client/auth/register"]').click();
        expect(page.url()).toBe('https://rahulshettyacademy.com/client/auth/register');
        console.log('We have landed on register page.');

        // Filling details
        // First name
        const firstName = await page.locator('[type="firstName"]').type('Sumit');
        // Last name
        const lastName = await page.locator('[type="lastName"]').type('Verma');
        // Email
        const email = await page.locator('[type="email"]').type('sumit.verma@agenty.com');
        // phone
        const phone = await page.locator('#userMobile').type('8810603018');
        // occupation
        await page.pause();
        const occupation = page.locator('select.custom-select');
        await occupation.selectOption('3: Engineer');
        console.log('Occupation selected');
        // gender
        const gender = await page.locator('[value="Male"]').click();
        // password
        const password = await page.locator('#userPassword').type('Abcd12345');
        // confirm password
        const confirmPassword = await page.locator('#confirmPassword').type('Abcd12345');
        // check box 
        const term_condition = await page.locator('[type="checkbox"]').check();
        // submit button
        const login_btn = await page.locator('#login').click();
        console.log('Registration successfully.');
        await page.pause();
    });
});