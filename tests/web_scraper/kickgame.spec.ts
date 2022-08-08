import { test, expect, request } from '@playwright/test';

// const url = []

// test.describe('Data Scraper',()=>{
//     test('Scrape',async({browser})=>{
//         const context = await browser.newContext();
//         const page = await context.newPage();
//         await page.goto('https://www.kickgame.co.uk/products/nocta-x-nike-hot-step-air-terra-black-university-gold-dh4692-002');
//         // empty array to store data
//         let data:any = [];
//         // Selectors
//         const title = await page.locator('h1.product-title').textContent();
//         const price = await page.locator('[name="id"] option').allTextContents();
//         const sku = await page.locator('.product-sku span').textContent();
//         const images = await page.getAttribute('.product-gallery--has-media [data-gallery-index="0"] img', "src");
//         const availability = await page.locator('.stock-level--text').textContent();

//         console.log(typeof price,price);
//         if(true){
//             data.push({
//                 "title":title?.replace(/\s/g, ""),
//                 "price":price,
//                 "currect_price":price,
//                 "sku":sku,
//                 "images":images,
//                 "availability":availability?.replace(/([^0-9.]+)/g,''),
//             });
//         }

//         console.log(data);
        
//     });
// });

