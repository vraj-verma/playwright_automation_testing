import { test, expect } from '@playwright/test';

test.describe('Login', () => {
    test('Login Should be happen', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/client');
        if (page.url() === 'https://rahulshettyacademy.com/client/auth/login') {
            const email = await page.locator('#userEmail').type('sumit.verma@agenty.com');
            console.log('Email entered',email)
            const password = await page.locator('#userPassword').type('Abcd12345');
            console.log('Password typed');
            const login_btn = await page.press('#login', 'Enter');
            expect(page.url()).toBe('https://rahulshettyacademy.com/client/auth/login');
            console.log('Login Successfully');
            
        }else{
            console.log('Wrong URL');
            
        }
    });
});