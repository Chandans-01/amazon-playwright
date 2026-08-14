import { Browser, Page, chromium } from "@playwright/test";

export class BrowserManager{


    

    async getPage(){

        
        let browser = await chromium.launch();
        let page = await browser.newPage();
        return page


    }






}