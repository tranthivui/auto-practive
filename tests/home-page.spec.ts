import { expect } from '@playwright/test';
import { test } from '../src/fixtures/product.fixture';
test.describe("Verify home page load success", async () => {
  const testData = {
    homeURL: "https://automationexercise.com/",
    productURL: "https://automationexercise.com/products"
    // menu: ["Home", "Products", "Cart", "Signup / Login", "- Contact us"]
  };
  test.beforeEach("Go to home page", async ({ page }) => {
    await page.goto(testData.homeURL);
  })

  test("Verify home page", async ({ homePage }) => {
    //Verify url
    await expect(homePage.page).toHaveURL(testData.url);
    //Verify load logo success
    const naturalWidth = await homePage.logo.evaluate(
      (img: HTMLImageElement) => img.naturalWidth
    );
    expect(naturalWidth).toBeGreaterThan(0);
    //Verify navigation menu hien thi
    await expect(homePage.navigationMenu).toBeVisible();
    //Verify feature items 
    await expect(homePage.featuresItems).toBeVisible();
    //Verify cac menu con hien thi
    await expect(homePage.homeLink).toBeVisible();
    await expect(homePage.productsLink).toBeVisible();
    await expect(homePage.cartLink).toBeVisible();
    await expect(homePage.loginLink).toBeVisible();
    await expect(homePage.contactLink).toBeVisible()
  })

  test("Verify click product menu", async ({ homePage, product }) => {
    await homePage.openProducts();
    const firstProduct = product.getProduct(0);
    await expect(product.page).toHaveURL(testData.productURL);
    await expect(firstProduct).toBeVisible();
    await expect(product.getProductName(firstProduct)).toBeVisible();
    await expect(product.getProductPrice(firstProduct)).toBeVisible();
    await expect(product.getViewProductDetail(firstProduct)).toBeVisible();
  })
})
