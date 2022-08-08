import { test } from '@playwright/test';

test.describe('Product url scraper', () => {
    test('Will get all the product link one by one', async ({ page }) => {
        // let all_links: any = [];
        await page.goto('https://www.kickgame.co.uk/?utm_source=country-redirect&utm_medium=dialog&utm_campaign=country_redirect');

        // empty array to store product urls
        let url: any = [];

        // Selector to get the product links
        var product_link = await page.$$('[data-product-item-content]>[href]');

        // loop over the product links and push them to the array 'URL'
        console.log(product_link.length);

        for (let links of product_link) {
            try {
                url.push(await (await links.getProperty('href')).jsonValue());
            }
            catch (err) {
                console.log(`Could not get the URLs:`, err.message);
            }
        }

        let counter = 1;
        // visit each product link one by one and scrape data
        for (let i = 0; i < 2; i++) {
            await page.goto(url[i]);
            // empty array to store data
            let data: any = [];
            // Selector to get the product details
            const title = await page.locator('h1.product-title').textContent();
            const price = await page.locator('[name="id"] option').allTextContents();
            const sku = await page.locator('.product-sku span').textContent();
            let image_selector = await page.$$('.product-gallery--image-background img');
            let img_arr: any = [];
            for (let image of image_selector) {
                let image_source = await image.getProperty('src');
                img_arr.push(await image_source.jsonValue());
            }
            const availability = await page.locator('.stock-level--text').textContent();

            if (url?.length) {
                console.log(`Product No: ${counter}`);
                data.push({
                    "title": title?.replace(/\n/g, "").trim(),
                    //    "price": price,
                    //    "currect_price": price,
                    "sku": sku?.replace(/\n/g, "").trim(),
                    "images": [...img_arr],
                    "availability": availability?.replace(/([^0-9.]+)/g, ''),
                });
            }
            counter++;
            console.log(JSON.stringify(data));
        };
    });
});

