
import { Locator, Page } from '@playwright/test';

export class TopBar {

    amazonInLogo: Locator;
    updateLocation: Locator;
    searchBox: Locator;
    changeLanguage: Locator;
    searchBarFindButton: Locator;
    accountAndList: Locator;
    returnAndOrders: Locator;
    cart: Locator





    constructor(page: Page) {

        this.searchBox = page.locator('#twotabsearchtextbox');
        this.searchBarFindButton = page.getByRole('button', { name: 'Go' });
        this.changeLanguage = page.locator('.icp-nav-link-inner');
        this.accountAndList = page.locator('Account & Lists');
        this.returnAndOrders = page.locator('Returns');
        this.cart = page.locator('#nav-cart-count-container');
        this.amazonInLogo = page.locator('#nav-logo-sprites');
        this.updateLocation = page.locator('#nav-global-location-slot');









    }


    getSearchBox(): Locator {

        return this.searchBox
    }

    async enterValueInSearchBox(value: string) {

        await this.searchBox.fill(value);
    }

    getAmazonInLogo(){
        return this.amazonInLogo;
    }

    getUpdateLocation(){
        return this.updateLocation;
    }

    getChangeLanguage(){
        return this.changeLanguage;
    }

    getSearchBarFindButton(){
        return this.searchBarFindButton;
    }

    getAccountAndList(){
        return this.accountAndList;
    }

    getReturnAndOrder(){
        return this.returnAndOrders;
    }

    getCart(){
        return this.cart;
    }

  
    //Action methods

    async clickAmazonIn(){

        await this.amazonInLogo.click();
    }

    async clickReturnAndOrders(){

        await this.returnAndOrders.click();
    }

    async clickCart(){

        await this.cart.click();
    }

    async clickLanguageChange(){

        await this.changeLanguage.click();
    }







}