const { expect } = require('@playwright/test');
class Checkout{

    constructor(page){
        this.page=page;
        this.bool= page.locator("h3:has-text('ZARA COAT 3')");
        this.checkbtn=page.locator('text= Checkout');
        this.cvvcode=page.locator(".field:has-text('CVV Code ') input");
        this.name=page.locator(".field:has-text('Name on Card') input");
         this.option=page.locator('.ta-results');
         this.submit=page.locator('.action__submit');

    }
    async checkoutdata(email){
        await this.page.locator("div li").first().waitFor();
        await expect(this.bool).toBeVisible();
        await this.checkbtn.click();
        await this.cvvcode.fill("402");
        await this.page.locator("select.input.ddl").first().selectOption("05");
        await this.page.locator("select.input.ddl").last().selectOption("16");
        await this.name.fill("Lekshmi");
        //AUTOSUGGESTION DROPDOWN TESTING
        await this.page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });//enter a text one by one letter we user pressSequentially
               await this.option.waitFor();
        const optioncount=await this.option.locator("button").count();
        for(let i=0; i<optioncount;i++)
        {
           const text= await this.option.locator("button").nth(i).textContent();
            if (text === " India")
            {
                await this.option.locator("button").nth(i).click();
                break;
            }
        }
        expect(this.page.locator(".user__name [type='text']").first()).toHaveText(email);
        await this.submit.click();
        const order=await this.page.locator('.em-spacer-1 label').nth(1).textContent();
        console.log(order);
    }
}
module.exports = { Checkout };