import { test, expect, Page, Locator } from '@playwright/test';
import { BrowserManager } from '../browser/BrowserManager';
import { HomePage } from '../pom/pages/HomePage';
import { TopBar } from '../pom/components/TopBar';
import { Handler } from '../handler/Handler';


    //let page:Page;
    let homePage: HomePage;
    let topBar: TopBar;
    let handler: Handler;


    test.beforeEach('Open site', async ({page})=>{
  
    await page.goto("https://www.amazon.in/ref=nav_logo");
    await page.waitForLoadState('load');
    homePage = new HomePage(page);
    topBar = new TopBar(page);
    
})


test("User Landed on the amazon homepage", async ({page})=>{

    await test.step('User should landed on homepage', async ()=> {

        await expect(page).toHaveURL(/amazon/);

        })

    })



    test('Verify that Search field accept value', async ()=>{

        await test.step('User enter value in the Search field', async()=>{

            await topBar.enterValueInSearchBox("Delhi");

        })

        await test.step('Given value should be entered in the field', async ()=>{

            await expect(topBar.getSearchBox()).toHaveValue("Delhi");
        })
    })

    test('Verity the side menu opens when user clicks on it', async ()=>{

        await test.step('When user click on side all menu bar option', async ()=>{

            await homePage.getAllMenu().click();


        })

        await test.step('All bar should open', async ()=>{

                await expect(homePage.getMenuCustomerName()).toBeVisible();

        })


    })

        




