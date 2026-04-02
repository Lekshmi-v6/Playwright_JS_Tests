const {Loginpage} =require("./Loginpage");
const {Dashboard} =require("./Dashboard");
const {Checkout} = require("./Checkout");
const {Ordersearch} = require("./Ordersearch");

class POManager{

    constructor(page){
        this.page=page;
        this.loginpage= new Loginpage(page);
        this.dashboard= new Dashboard(page);
        this.checkout= new Checkout(page);
        this.Ordersearch = new Ordersearch(page);

    }
    getLoginPage(){
        return this.loginpage;
    }
    getDashboard(){
        return this.dashboard;
    }
    getCheckout(){
        return this.checkout;
    }
    getOrdersearch(){
        return this.Ordersearch;
    }
}
module.exports ={POManager};