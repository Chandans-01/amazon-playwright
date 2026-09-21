import { test, expect, Page, Locator } from '@playwright/test';
import { BrowserManager } from '../browser/BrowserManager';
import { HomePage } from '../pom/pages/HomePage';
import { TopBar } from '../pom/components/TopBar';
import { Handler } from '../handler/Handler';
import { FooterComponents } from '../pom/pages/FooterComponents';


    //let page:Page;
    let homePage: HomePage;
    let topBar: TopBar;
    let handler: Handler;
    let fc:FooterComponents;


    test.beforeEach('Open site', async ({page})=>{
  
    await page.goto("https://www.amazon.in/ref=nav_logo");
    await page.waitForLoadState('load');
    homePage = new HomePage(page);
    topBar = new TopBar(page);
    fc = new FooterComponents(page);
    
})


test("User Landed on the amazon homepage", async ({page})=>{

    await test.step('User should landed on homepage', async ()=> {

        await expect(page).toHaveURL(/amazon/);

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

    //Get to know about us links tests

    test('Verify that user redirected to About Amazon page when user click on About Amazon', async ({page})=>{

        await test.step('User click on About Amazon page', async ()=> {

           await fc.clickAboutAmazon();

        })

        await test.step('User should redirect to about amazon page', async ()=> {

            await expect(page).toHaveURL(/aboutamazon/);
        })

    }) 

    test('Verify that user redirected to job page upon clicking careers', async ({page})=> {

       await test.step('User click on the Careers option under Get to Know Us', async ()=> {

            await fc.clickcareers();

        })

        await test.step('User should redirected to jobs page', async ()=> {

           await expect(page).toHaveURL(/jobs/);
        })


    })

    test('Verify that user redirect to press release page upon clicing Press Release', async ({page})=> {

        await test.step('User click on Press Release page', ()=>{

            fc.clickPressReleases();
        })

        await test.step('User should redirected to Press Release', async ()=>{

           await expect(page).toHaveURL(/press-release/);
        })
    })


    test('Verify that user redirected on Amazon Science page upon clicking Amazon Science', async ({page})=> {

        await test.step('User click on the Amazon Science', async ()=> {
           await fc.clickAmazonScience();
        })

        await test.step('User should redirect to Amazon Science page', async ()=> {

            await expect(page).toHaveURL(/science/)
        })
    })


    //Connect With Us link action methods 



    test('Verify that user redirected to Facebook page upon clicking on Facebook', async ({page})=>{

        await test.step('User click on the Facebook option', async ()=>{
            
            await fc.openFacebook();
        })

        await test.step('User should redirect to Facebook page', async ()=>{
            await expect(page).toHaveURL(/facebook/);
        })
    })


    test('Verify that user redirected to Twitter page upon clicking on Twitter', async ({page})=>{

        await test.step('User click on the Twitter link', async ()=>{
            
            await fc.opentwitter();

        })    

        await test.step('User should redirect to twitter page', async ()=>{

            await expect(page).toHaveURL(/x/);
        })
    })


    test('Verify that use redirected to Instagram page upon clicking on Instagram', async ({page})=>{

        await test.step('User click on Instagram option', async ()=>{

            await fc.openInstagram();
        })

        await test.step('User should redirected to Instagram page', async ()=>{

           await expect(page).toHaveURL(/instagram/);
        })


    })

    //Make Money with Us links tests



    test('Verify that user redirected to the Sell page upon clicking on Sell on Amazon', async ({page})=>{

        await test.step('User click on Sell on Amazon option', async ()=>{

            await fc.clickSellOnAmazon();
        })

        await test.step('User should redirect on Sell page', async ()=>{

            await expect(page).toHaveURL(/sell/);
        })
    })

    test('Verify that user redirected to Protect and Build your brand page upon clicking on option', async ({page})=>{

        await test.step('User click on Protect and build your brand', async ()=>{

            await fc.clickProtectAndBuildProduct();
        })

        await test.step('User should redirected to Sell and build your brand', async ()=>{

            await expect(page).toHaveURL(/brand-registry/);
        })
    })
    
    test('Verify that user redirected to Amazon Global Selling page', async ({page})=>{

       await test.step('User click on the Amazon Global Selling option', async ()=>{

            await fc.clickAmazonGlobalSelling();
        })

       await test.step('User should redircted to Amazon Global Selling page', async ()=>{
          
            await expect(page).toHaveURL(/amazon-global-selling/);
        })
        
    })

    test('Verify that user redirected to Supply to Amazon page upon clicking option', async ({page})=>{

        await test.step('User click on Supply to Amazon page', async ()=>{

            await fc.clickSupplyToAmazon();
        })

        await test.step('User should redirected to Supply to amazon page', async ()=>{

            await expect(page).toHaveURL(/supply/);
        })
    })


    test('Verify that user lands on affiliate program page upon cliking option', async ({page})=>{

       
        await test.step('User click on Become an Affiliate', async ()=>{

        await fc.clickBecomeAnAfilliate();

        })

        await test.step('User should redirected to Become an affiliate page', async ()=>{

        await expect(page).toHaveURL(/affiliate-program/);
        })
    
    })

    test('Verify that user redirected on advertising page upon clickin on Advertise Your Products option', async ({page})=>{

        await test.step('User click on Advertise Your Product option', async ()=>{

        await fc.clickAdvertiseYourProduct();
        })

        await test.step('User should redirected to Advertise your Products page', async ()=>{

            await expect(page).toHaveURL(/advertising/);
        })

    })
    
    test('Verify that user redirected to Amazon Pay page upon clicking Amazon Pay on Merchants', async ({page})=>{

        await test.step('User click on Amazon Pay on Merchants option', async ()=>{
            await fc.clickAmazonPayOnMerchants();
        })

        await test.step('User should be redirected to amazon pay page', async ()=>{
            await expect(page).toHaveURL(/amazonpay/);
        })

    })
        

    


