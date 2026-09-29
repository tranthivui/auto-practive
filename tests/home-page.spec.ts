import { expect } from '@playwright/test';
import { test } from '../src/fixtures/home-page.fixture';
test.describe("Verify home page load success", async () => {
  const testData = {
    url: "https://automationexercise.com/",
    // menu: ["Home", "Products", "Cart", "Signup / Login", "- Contact us"]
  };
  test.beforeEach("Go to home page", async ({ page }) => {
    await page.goto(testData.url);
  })

  test("Verify home page", async ({ homePage }) => {
    //Verify url
    await expect(homePage.page).toHaveURL(testData.url);
    //Verify load logo success
    const naturalWithd = await homePage.logo.evaluate(
      (img: HTMLImageElement) => img.naturalWidth
    );
    expect(naturalWithd).toBeGreaterThan(0);
    //Verify navigation menu hien thi
    await expect(homePage.navigationMenu).toBeVisible();
    //Verify feature items 
    await expect(homePage.featuresItems).toBeVisible();
    //Verify cac menu con hien thi
    await expect(homePage.homeLink).toBeVisible();
    await expect(homePage.productsLink).toBeVisible();
    await expect(homePage.cartLink).toBeVisible();
    await expect(homePage.loginLink).toBeVisible();
    await expect(homePage.contactLink).toBeVisible();
  })
})
