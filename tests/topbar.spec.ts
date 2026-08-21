import {Page, expect, test} from '@playwright/test'
import { BrowserManager } from '../browser/BrowserManager'
import { TopBar } from '../pom/components/TopBar';
import { HomePage } from '../pom/pages/HomePage';


    let topBar:TopBar;
    //let page:Page
    let homePage: HomePage
    

    test.beforeAll('Before all', async ({page})=>{


      //  page = page;
        await page.goto("https://www.amazon.in/ref=nav_logo");
        await page.waitForLoadState('load');
        homePage = new HomePage(page);
        topBar = new TopBar(page);
            
    })


        test.only('Verify that Cart is opened when user clicks on top cart option', async ({page}) =>{

            await test.step('Click on cart option', async ()=>{

               await topBar.clickCart();


            })

           await test.step('Cart page should open', async () =>{

               await expect(page).toHaveURL(/nav_cart/)

            })

        })

