const { expect } = require('@playwright/test');

class Ordersearch{

    constructor(page){
        this.page=page;
        this.orderbtn=page.locator("button[routerlink*='orders']");
        this.orderidrow=page.locator("tbody tr");
      
    }
    async Searchorder(order){
        await this.orderbtn.click();
      await this.page.locator('tbody tr').first().waitFor();
      const countorder=await this.orderidrow.count();
       
        for(let i=0;i<countorder;i++)
{
    const ordertext= await this.orderidrow.nth(i).locator("th").textContent();
    console.log(ordertext);

if (ordertext && ordertext.includes(order))
{
    await this.orderidrow.nth(i).locator("button:has-text('View')").click();
    break;
}
}


    }
}
module.exports={Ordersearch};