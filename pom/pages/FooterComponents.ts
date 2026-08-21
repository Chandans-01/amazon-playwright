import { test, Locator, expect, Page } from '@playwright/test'

export class FooterComponents {

    // Properties
    backToTopButton: Locator

    // connect with us
    facebook: Locator
    twitter: Locator
    instagram: Locator

    // get to know us
    aboutAmazon: Locator
    careers: Locator
    pressReleases: Locator
    amazonScience: Locator

    // make money with us
    sellOnAmazon: Locator
    sellUnderAmazon: Locator
    protectAndBuildYourBrand: Locator
    amazonGlobalSelling: Locator
    supplyToAmazon: Locator
    becomeAnAffilliate: Locator
    fulfillmentByAmazon: Locator
    advertiseYourProduct: Locator
    amazonPayOnMerchants: Locator

    // Constructor
    constructor(page: Page) {
        this.backToTopButton = page.locator('#navBackToTop')

        // connect with us components
        this.facebook = page.getByRole('link', { name: 'Facebook' })
        this.twitter = page.getByRole('link', { name: 'Twitter' })
        this.instagram = page.getByRole('link', { name: 'Instagram' })

        // get to know us
        this.aboutAmazon = page.getByRole('link', { name: 'About Amazon' })
        this.careers = page.getByRole('link', { name: 'Careers' })
        this.pressReleases = page.getByRole('link', { name: 'Press Releases' })
        this.amazonScience = page.getByRole('link', { name: 'Amazon Science' })

        // make money with us
        this.sellOnAmazon = page.getByRole('link', { name: 'Sell On Amazon' })
        this.sellUnderAmazon = page.getByRole('link', { name: 'Sell under Amazon Accelerator' })
        this.protectAndBuildYourBrand = page.getByRole('link', { name: 'Protect and Build Your Brand' })
        this.amazonGlobalSelling = page.getByRole('link', { name: 'Amazon Global Selling' })
        this.supplyToAmazon = page.getByRole('link', { name: 'Supply to Amazon' })
        this.becomeAnAffilliate = page.getByRole('link', { name: 'Become an Affiliate' })
        this.fulfillmentByAmazon = page.getByRole('link', { name: 'Fulfilment by Amazon' })
        this.advertiseYourProduct = page.getByRole('link', { name: 'Advertise Your Products' })
        this.amazonPayOnMerchants = page.getByRole('link', { name: 'Amazon Pay on Merchants' })
    }

    // Behavior - getters
    getBackToTop(): Locator {
        return this.backToTopButton
    }

    // connect with us
    getFacebook(): Locator {
        return this.facebook
    }

    getTwitter(): Locator {
        return this.twitter
    }

    getInstagram(): Locator {
        return this.instagram
    }

    // get to know us
    getAboutAmazon(): Locator {
        return this.aboutAmazon
    }

    getCareers(): Locator {
        return this.careers
    }

    getPressReleases(): Locator {
        return this.pressReleases
    }

    getAmazonScience(): Locator {
        return this.amazonScience
    }

    // make money with us - getters
    getSellOnAmazon(): Locator {
        return this.sellOnAmazon
    }

    getSellUnderAmazon(): Locator {
        return this.sellUnderAmazon
    }

    getProtectAndBuildProduct(): Locator {
        return this.protectAndBuildYourBrand
    }

    getAmazonGlobalSelling(): Locator {
        return this.amazonGlobalSelling
    }

    getSupplyToAmazon(): Locator {
        return this.supplyToAmazon
    }

    getBecomeAnAfilliate(): Locator {
        return this.becomeAnAffilliate
    }

    getFulfillmentByAmazon(): Locator {
        return this.fulfillmentByAmazon
    }

    getAdvertiseYourProduct(): Locator {
        return this.advertiseYourProduct
    }

    getAmazonPayOnMerchants(): Locator {
        return this.amazonPayOnMerchants
    }

    // Behavior - actions
    async clickBacktoTop(): Promise<void> {
        await this.backToTopButton.click()
    }

    // connect with us
    async openFacebook(): Promise<void> {
        await this.facebook.click()
    }

    async opentwitter(): Promise<void> {
        await this.twitter.click()
    }

    async openInstagram(): Promise<void> {
        await this.instagram.click()
    }

    // get to know us section
    async clickAboutAmazon(): Promise<void> {
        await this.aboutAmazon.click()
    }

    async clickcareers(): Promise<void> {
        await this.careers.click()
    }

    async clickPressReleases(): Promise<void> {
        await this.pressReleases.click()
    }

    async clickAmazonScience(): Promise<void> {
        await this.amazonScience.click()
    }

    // make money with us - actions
    async clickSellOnAmazon(): Promise<void> {
        await this.sellOnAmazon.click()
    }

    async clickSellUnderAmazon(): Promise<void> {
        await this.sellUnderAmazon.click()
    }

    async clickProtectAndBuildProduct(): Promise<void> {
        await this.protectAndBuildYourBrand.click()
    }

    async clickAmazonGlobalSelling(): Promise<void> {
        await this.amazonGlobalSelling.click()
    }

    async clickSupplyToAmazon(): Promise<void> {
        await this.supplyToAmazon.click()
    }

    async clickBecomeAnAfilliate(): Promise<void> {
        await this.becomeAnAffilliate.click()
    }

    async clickFulfillmentByAmazon(): Promise<void> {
        await this.fulfillmentByAmazon.click()
    }

    async clickAdvertiseYourProduct(): Promise<void> {
        await this.advertiseYourProduct.click()
    }

    async clickAmazonPayOnMerchants(): Promise<void> {
        await this.amazonPayOnMerchants.click()
    }

}