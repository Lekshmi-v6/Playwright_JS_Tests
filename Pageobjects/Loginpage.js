class Loginpage{

    constructor(page)
    {
        this.page = page;
        this.signInbutton =page.locator("[type='submit']");
        this.userName= page.locator("[type='email']");
        this.password=page.locator("#userPassword");
       

    }
    async goTo(){

    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }
   async validLogin(userName,password)
    {
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.signInbutton.click();
        await this.page.locator('.card-body b').first().waitFor();
    }
}
module.exports = {Loginpage};