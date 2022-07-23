import { test, expect } from '@playwright/test';
const fs = require('fs')

const file = fs.readFileSync('./privacy.json', 'utf-8');
const credentials = [{
    username: JSON.parse(file).shetty.username,
    password: JSON.parse(file).shetty.password
}];

test.describe('Login', () => {
    test('Login should happen', async ({ page }) => {
        // Goto URL
        await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');
        await page.pause();
        // Enter username 
        await page.fill('#username', credentials[0].username);
        // Enter password
        await page.fill('#password', credentials[0].password);

        // User Role
        await page.check('[value="user"]');
        // pop-up
        await page.click('#okayBtn');

        // Type
        const dropDown = page.locator('select[data-style="btn-info"]');
        await dropDown.selectOption('teach');

        // term & condition checkbox
        await page.check('#terms');

        // click on submit btn
        await page.click('#signInBtn');

        console.log(page.url());

        await page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop');
        expect(page.url()).toBe('https://rahulshettyacademy.com/angularpractice/shop');
        console.log('Login Success.');
    });
});