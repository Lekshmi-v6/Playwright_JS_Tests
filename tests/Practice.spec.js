
const{test,expect}= require('@playwright/test');
const { log } = require('node:console');
const { execPath } = require('node:process');

test('Sign up',async({page})=> {

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator('.login-wrapper-footer-text').click();
await expect(page.locator('h1.login-title')).toContainText('Register');

await page.locator('#firstName').fill('Lekshmi');
await page.locator("[type='lastName']").fill('Vijayan');
await page.locator("[type='email']").fill('lekshmi.v314@gmail.com');
await page.locator("[placeholder='enter your number']").fill('9633525789');
const dropdown = page.locator('select[formcontrolname="occupation"]');
await dropdown.selectOption({ label: 'Engineer' });
await page.locator("[value='Male']").click();
await page.locator("#userPassword").fill('Pass@123');
await page.locator("#confirmPassword").fill('Pass@123');
await page.locator("[type='checkbox']").click();
await page.locator("[type='submit']").click();
await expect(page.locator('h1.headcolor')).toContainText('Account Created Successfully');
await page.locator('text=Login').click();
//nstead of textContent() use inputValue()
//console.log(await page.locator("#username").inputValue());

});
test.only('Login',async({page})=>
{
const productName='ZARA COAT 3';
const email='lekshmi.v634@gmail.com';
 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("[type='email']").fill('lekshmi.v634@gmail.com');
await page.locator("#userPassword").fill('Pass@123');
await page.locator("[type='submit']").click();
//await page.waitForLoadState('networkidle');//it is falky
//await page.locator('.card-body b').waitFor();//donot wait for mutiple element return so it fail\
await page.locator('.card-body b').first().waitFor();
const title= page.locator('.card-body b');
const product=page.locator('.card-body');
console.log(await title.allTextContents());
const count=await product.count();
console.log(count);
for(let i=0;i<count;i++)
{
   if( await title.nth(i).textContent() === productName )
   {
    await product.nth(i).locator("text= Add To Cart").click();
    break;
   }
}
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();
await page.locator('text= Checkout').click();
await page.locator(".field:has-text('CVV Code ') input").fill("402");
await page.locator("select.input.ddl").first().selectOption("05");
await page.locator("select.input.ddl").last().selectOption("16");
await page.locator(".field:has-text('Name on Card') input").fill("Lekshmi");
//AUTOSUGGESTION DROPDOWN TESTING
await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });//enter a text one by one letter we user pressSequentially
const option=page.locator('.ta-results');
await option.waitFor();
const optioncount=await option.locator("button").count();
for(let i=0; i<optioncount;i++)
{
   const text= await option.locator("button").nth(i).textContent();
    if (text === " India")
    {
        await option.locator("button").nth(i).click();
        break;
    }
}
expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.locator('.action__submit').click();
const order=await page.locator('.em-spacer-1 label').nth(1).textContent();
console.log(order);
await page.locator("button[routerlink*='orders']").click();
await page.locator('tbody tr').first().waitFor();
const orderidrow=await page.locator("tbody tr");

for(let i=0;i<await orderidrow.count();i++)
{
    const ordertext= await orderidrow.nth(i).locator("th").textContent();
    console.log(ordertext);

if (ordertext.includes(order))
{
    await orderidrow.nth(i).locator("button:has-text('View')").click();
    break;
}
}
const orderdetail=await page.locator(".col-text").textContent();
console.log(orderdetail);
expect(order.includes(orderdetail)).toBeTruthy();

await page.pause();//to view the result,otherwise browser close immediatily
});