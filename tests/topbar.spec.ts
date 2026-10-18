import { expect, test } from '@playwright/test';
import { TopBar } from '../pom/components/TopBar';

let topBar: TopBar;

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.in/ref=nav_logo');
  await page.waitForLoadState('load');
  topBar = new TopBar(page);
});

test('Verify that Cart is opened when user clicks on top cart option', async ({ page }) => {
  await test.step('Click on cart option', async () => {
    await topBar.clickCart();
  });

  await test.step('Cart page should open', async () => {
    await expect(page).toHaveURL(/nav_cart/);
  });
});

test('Verify that Search field accept value', async ({page}) => {
  await test.step('User enter value in the Search field', async () => {
    await topBar.enterValueInSearchBox('Delhi');
  });

  await test.step('Given value should be entered in the field', async () => {
    await expect(topBar.getSearchBox()).toHaveValue('Delhi');
    page.screenshot();
    
    topBar.getUpdateLocation().screenshot({path: 'test-results/'})
    

  });
});



