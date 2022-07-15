import { test, expect } from '@playwright/test';
// const fs = require('fs');

// const data = fs.readFileSync('/privacy,json',{encoding:'utf8', flag:'r'});
const secret_pass = ['qwerty12345'];

test.describe('Sign Up Form', () => {
    test('Should register as new user', async ({ page }) => {
        const url = await page.goto('https://sso.teachable.com/secure/9521/identity/sign_up/email?wizard_id=KO3DAG9uUltafDzgfKNi-CiH62DVeZI4L34YvDYGUe_hiz1iKtNjmAnUg_woK85-CW4WazBlaSV97Rg2wp6NOQ');
        
        // Extracting the selector & then fill the input
        const full_name = await page.type('#user_name','Sumit Verma');
        const user_email = await page.type('#user_email','sumit.verma@agenty.com');
        const password = await page.fill('#password',secret_pass[0]);
        // const checkBox = await page.check('[type="checkbox"]#allow_marketing_emails');
        const checkBox = await page.locator('[type="checkbox"]#allow_marketing_emails').check();
        expect(await page.isChecked('[type="checkbox"]#allow_marketing_emails')).toBeTruthy();

        // submit button
        await page.click('[data-testid="signup-button"]',{"button":"left"});

        expect(await page.url()).toBe('https://courses.rahulshettyacademy.com/');
    });
});