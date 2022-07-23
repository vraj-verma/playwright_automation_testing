import {test, expect} from '@playwright/test';

const credentials = ['sumit.verma@agenty.com','qwerty12345'];

test.describe('Login',()=>{
    test('Should click on login text',async({page})=>{
        await page.goto('https://sso.teachable.com/secure/9521/identity/sign_up/email?wizard_id=78TCrkxnVTyxBIQyOizJbGi5MLAr8k3W_uaEvBrHz-1iTEtJArUX9bSaPED2XDBDxhbZ60s7XBHLNRS7qPWV8Q');
        await page.click('[href="/secure/9521/identity/login"]');
        expect(page.url()).toBe('https://sso.teachable.com/secure/9521/identity/sign_up/email?wizard_id=78TCrkxnVTyxBIQyOizJbGi5MLAr8k3W_uaEvBrHz-1iTEtJArUX9bSaPED2XDBDxhbZ60s7XBHLNRS7qPWV8Q');
        
        console.log('Congrats! We have landed on login page');
        
        await page.waitForTimeout(2000);
        // Filling credentials to get log in

        await page.fill('#email',credentials[0]);
        await page.fill('#password',credentials[1]);
        await page.check('#remember_me');
        await page.click('[value="Login"]');
        expect(page.url()).toBe('https://sso.teachable.com/secure/9521/identity/login');
        console.log('Login has been made');
    });
});