class Dashboard
{
    constructor(page){
        this.page=page;
         this.title= page.locator('.card-body b');
        this.product=page.locator('.card-body');
        this.cart=page.locator("[routerlink*='cart']");
    }
    async search(productName){
        const alltitle= await this.title.allTextContents();
        const count=await this.product.count();
        console.log(count);
        for(let i=0;i<count;i++)
        {
           if( await this.title.nth(i).textContent() === productName )
           {
            await this.product.nth(i).locator("text= Add To Cart").click();
            break;
           }
        }
    }
        async Navcart(){

        await this.cart.click();
       
        }
       
    }
module .exports = { Dashboard };
