import {Locator, Page} from '@playwright/test'

export class makeMoneyWithUs{

// Properties
sellOnAmazon: Locator;
sellUnderAmazon: Locator;
protectAndBuildYourBrand: Locator;
amazonGlobalSelling: Locator;
supplyToAmazon: Locator;
becomeAnAffilliate: Locator;
fulfillmentByAmazon: Locator;
advertiseYourProduct: Locator;
amazonPayOnMerchants: Locator;

// Constructor
constructor (page: Page)
{
        this.sellOnAmazon = page.getByRole('link', { name: 'Sell On Amazon' });
        this.sellUnderAmazon = page.getByRole('link', { name: 'Sell under Amazon Accelerator' });
        this.protectAndBuildYourBrand = page.getByRole('link', { name: 'Protect and Build Your Brand' });
        this.amazonGlobalSelling = page.getByRole('link', { name: 'Amazon Global Selling' });
        this.supplyToAmazon = page.getByRole('link', { name: 'Supply to Amazon' });
        this.becomeAnAffilliate = page.getByRole('link', { name: 'Become an Affiliate' });
        this.fulfillmentByAmazon = page.getByRole('link', { name: 'Fulfilment by Amazon' });
        this.advertiseYourProduct = page.getByRole('link', { name: 'Advertise Your Products' });
        this.amazonPayOnMerchants = page.getByRole('link', { name: 'Amazon Pay on Merchants' });
    }

//Behavior
//-----getter method-----
getSellOnAmazon()
{
    return this.sellOnAmazon;
}

getSellUnderAmazon()
{
    return this.sellUnderAmazon;
}

getProtectAndBuildProduct()
{
    return this.protectAndBuildYourBrand;
}

getAmazonGlobalSelling()
{
    return this.amazonGlobalSelling;
}

getSupplyToAmazon()
{
    return this.supplyToAmazon;
}

getBecomeAnAfilliate()
{
    return this.becomeAnAffilliate;
}

getFulfillmentByAmazon()
{
    return this.fulfillmentByAmazon;
}

getAdvertiseYourProduct()
{
    return this.advertiseYourProduct;
}

getAmazonPayOnMerchants()
{
    return this.amazonPayOnMerchants;
}




//-----action method-----

async clickSellOnAmazon()
{
    return this.sellOnAmazon.click();
}

async clickSellUnderAmazon()
{
    await this.sellUnderAmazon;
}

async clickProtectAndBuildProduct()
{
    await this.protectAndBuildYourBrand;
}

async clickAmazonGlobalSelling()
{
    await this.amazonGlobalSelling.click();
}

async clickSupplyToAmazon()
{
    await this.supplyToAmazon.click();
}

async clickBecomeAnAfilliate()
{
    await this.becomeAnAffilliate.click();
}

async clickFulfillmentByAmazon()
{
    await this.fulfillmentByAmazon.click();
}

async clickAdvertiseYourProduct()
{
    await this.advertiseYourProduct.click();
}

async clickAmazonPayOnMerchants()
{
    await this.amazonPayOnMerchants.click();
}




}