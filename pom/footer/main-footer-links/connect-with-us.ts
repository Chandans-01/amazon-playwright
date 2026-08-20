import {Locator, Page} from "@playwright/test"

export class connectWithUs{

    //Properties
    facebook: Locator;
    twitter: Locator;
    instagram: Locator;


    //Constructor
    constructor(page:Page)
     {
        this.facebook = page.getByRole('link', { name: 'Facebook' });
        this.twitter = page.getByRole('link', { name: 'Twitter' });
        this.instagram = page.getByRole('link', { name: 'Instagram' });
    }


    //Behavior
    //-----getter method-----
    getFacebook(){
        return this.facebook;
    }

    getTwitter(){
        return this.twitter;
    }

    getInstagram(){
        return this.instagram
    }


    //-----action method-----
    async openFacebook(){
       await  this.facebook.click();
    }

    async opentwitter(){
        await this.twitter.click();
    }

    async openInstagram(){
        await this.instagram.click();
    }

}