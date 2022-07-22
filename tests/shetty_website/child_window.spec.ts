import { test, expect } from '@playwright/test';

test.describe('Click on link', () => {
    test('Should click on the link to navigate to another page', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const visit_page = await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');

        // Assertion
        expect(page.url()).toContain('loginpagePractise/');
        console.log(page.url());

        // Blink =ing text selector
        const websiteLink = page.locator('.blinkingText');

        // Creating a new page in the same browser to avoid race condition
        const [newTab] = await Promise.all([
            context.waitForEvent('page'),
            websiteLink.click(),
        ]);

        // Assertion to ensure that new tab has been open or not
        expect(newTab.url()).toEqual('https://rahulshettyacademy.com/documents-request');
        console.log(`New Tab is open now with this url : ${newTab.url()}`);

        // Fetching a username from a whole text
        const text = await newTab.locator('.red').innerText();
        const username = text.split('@')[1].split('.')[0];
        console.log(username);

        // After getting the 'username', now get back to the first tab. i.e., Login page
        // Login credentails
        await page.fill('#username', username);
        await page.fill('#password', 'learning');
        // await page.pause();
        // Role
        await page.check('[value="user"]');

        // Pop-Up
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
    });
});