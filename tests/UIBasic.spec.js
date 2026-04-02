const {test,expect} = require('@playwright/test');



test('First Playwright Test',async ({browser}) =>{
    const context =await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");


});
test('Page Playwright test',async({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());//get title- Assertion
await expect(page).toHaveTitle("Practice Page");
});

test.only ('LoginTest',async({page})=>
{
    const username= page.locator('#username');
    const signin =  page.locator("#signInBtn");
    const product=page.locator('.card-title a');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     await page.locator('#username').fill("rahulshetty");
     await page.locator("[type='password']").fill("Learning@830$3mK2");
     await page.locator("#signInBtn").click();
     console.log(await page.locator("[style*='block']").textContent());
    await expect( page.locator("[style*='block']")).toContainText('Incorrect');
    await username.fill("");
    await username.fill("rahulshettyacademy");
    await signin.click();
    //await expect(page.locator('h1.my-4')).toContainText('Shop Name');
     // console.log(await page.locator('.card-title a').first().textContent());
    //console.log(await page.locator('.card-title a').nth(1).textContent());
      //console.log(await page.locator('.card-title a').last().textContent());
      console.log(await product.allTextContents());

    });

    
    