import { Locator, Page } from "@playwright/test";

export class getToKnowUs {

    //Properties
    aboutAmazon: Locator;
    careers: Locator;
    pressReleases: Locator;
    amazonScience: Locator;

    //Constructor
    constructor (page: Page)
    {
        this.aboutAmazon = page.getByRole('link', { name: 'About Amazon' });
        this.careers = page.getByRole('link', { name: 'Careers' });
        this.pressReleases = page.getByRole('link', { name: 'Press Releases' });
        this.amazonScience = page.getByRole('link', { name: 'Amazon Science' });
    }

    
    //Behavior
    //-----getter method-----
    getAboutAmazon(){
        return this.aboutAmazon;
    }


    getCareers(){
        return this.careers;
    }
    
    getPressReleases(){
        return this.pressReleases;
    }

    getAmazonScience(){
        return this.amazonScience;
    }


    //-----action method-----
    async clickAboutAmazon(){
        await this.aboutAmazon.click();

    }

    async clickcareers(){
        await this.careers.click();
    }

    async clickPressReleases(){
        await this.pressReleases.click();
    }

    async clickAmazonScience(){
        await this.amazonScience.click();
    }


}