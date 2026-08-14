import {Locator, Page} from '@playwright/test'
import { BrowserManager } from '../browser/BrowserManager'



export class Handler{


    async continueShoppingHandler(){

    
   let bm: BrowserManager = new BrowserManager();

   let page:Page = await bm.getPage()

   let continueShopping:Locator = page.getByText('Continue shopping')

   if(await continueShopping.isVisible()){
   await page.getByText('Continue shopping').click();
   }else {
    console.log('Homepage open');
   }

    }


}