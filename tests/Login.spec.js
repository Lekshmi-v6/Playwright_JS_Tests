const {test, expect} = require('@playwright/test');
const {POManager} = require('../Pageobjects/POManager');

test('Testcase',async ({page})=> {
const Pomanager= new POManager(page);
const username="lekshmi.v634@gmail.com";
const password="Pass@123";
const loginpage=Pomanager. getLoginPage();
 await loginpage.goTo();
 await loginpage.validLogin(username,password);   
 const dashboard= Pomanager. getDashboard();
 const productName='ZARA COAT 3';
 await dashboard.search(productName);
 await dashboard.Navcart();
 const checkout=Pomanager. getCheckout();
 const email='lekshmi.v634@gmail.com';
 await checkout.checkoutdata(email);
 const ordersearch=Pomanager. getOrdersearch();
 const order=page.locator('.em-spacer-1 label').nth(1).textContent();
 await ordersearch.Searchorder(order);

});