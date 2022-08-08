import { test, expect } from '@playwright/test';

test.describe('One to One Event', () => {
    test('should create one to one event', async ({ page }) => {
        await test.step('Login', async () => {
            await page.goto('https://app.dayschedule.in/login');
            const login_text = await page.locator('h2').textContent();
            const result = expect(login_text).toMatch('Login');

            const username = await page.type('#email', 'sumit.verma+12@agenty.com');
            const password = await page.type('#password', 'qwerty12345');
            const submit_btn = await page.click('[type="submit"]');
            await page.click('.close');
            expect(page.url()).toMatch('https://app.dayschedule.in/resources');

        });

        await test.step('Select Survey', async () => {
            const accordion = await page.locator('#accordionSidebar li').allTextContents();
            for (let i = 0; i < accordion.length; i++) {
                if (accordion[i] == 'Survey') {
                    await page.click(`#accordionSidebar li:nth-child(${accordion.indexOf('Survey') + 4})`);
                    break;
                }
            };
            await page.waitForURL('https://app.dayschedule.in/surveys');
            expect(page.url()).toMatch('https://app.dayschedule.in/surveys');
        })
    });
});