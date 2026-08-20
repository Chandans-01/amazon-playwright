import { Locator, Page } from '@playwright/test';

export class footerLinks {

    //Properties
    backToTopButton: Locator;

    //Constructors
    constructor (page: Page){

        this.backToTopButton = page.locator('#navBackToTop');

    }

    //Behavior
    //-----getter method-----
    getBackToTop(): Locator {
        return this.backToTopButton;

    }

    //-----action mehtod-----
    async clickBacktoTop(){

        await this.backToTopButton.click();
    }

}