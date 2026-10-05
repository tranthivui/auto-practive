import { expect } from '@playwright/test';
import { test } from '../src/fixtures/product.fixture';
import { HomePage } from '../src/pages/home-page.page';
test.describe("Verify home page load success", async () => {
  const testData = {
    url:{
      home:"https://automationexercise.com/",
      product: "https://automationexercise.com/products",
      login: "https://automationexercise.com/login"
    }
  };
  test.beforeEach("Go to home page", async ({ page }) => {
    await page.goto(testData.url.home);
  })

  test("Verify home page", async ({ homePage }) => {
    //Verify url
    await expect(homePage.page).toHaveURL(testData.url.home);
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

  test("Verify click product menu",{tag:"@smoke"}, async ({ homePage, product }) => {
    await homePage.openMenu(homePage.productsLink);
    await expect(product.productHeading).toBeVisible();
    const firstProduct = product.getProduct(0);
    await expect(product.page).toHaveURL(testData.url.product);
    await expect(firstProduct).toBeVisible();
    await expect(product.getProductName(firstProduct)).toBeVisible();
    await expect(product.getProductName(firstProduct)).not.toBeEmpty();
    await expect(product.getProductPrice(firstProduct)).toBeVisible();
    await expect(product.getViewProductDetail(firstProduct)).toBeVisible();
  })

  test("Login fail with invalid user/pass",async({homePage})=>{
    await homePage.openMenu(homePage.loginLink);
    //Verify da vao trang login
    await expect(homePage.page).toHaveURL(testData.url.login);
    //Verify heading
  })
})
