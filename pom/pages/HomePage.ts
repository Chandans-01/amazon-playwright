import { Locator, Page } from "@playwright/test"


export class HomePage {


    seeTheWorldForLess: Locator;
    allMenu: Locator;
    
    menuCustomerName: Locator;



    constructor(page: Page){

        this.seeTheWorldForLess = page.getByText("See the world for less");
        this.allMenu = page.locator('#nav-hamburger-menu');
    
        this.menuCustomerName = page.locator('#hmenu-customer-name').first();

    }

    getMenuCustomerName(): Locator{
        return this.menuCustomerName;
    }

    getSeeTheWorldForLess(): Locator{

        return this.seeTheWorldForLess;
    } 

    getAllMenu(){

        return this.allMenu;


    }

    



  







}