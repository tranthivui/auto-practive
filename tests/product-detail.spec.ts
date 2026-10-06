import { expect, Locator } from "@playwright/test";
import { test } from "../src/fixtures/page.fixture";
test.describe("Verify product detail page", async () => {
    const testData = {
        homeURL: "https://automationexercise.com/",
        productURL: "/products",
        productDetailUrl: "/product_details/"
    };
    test.beforeEach("Go to home page", async ({ productDetail, homePage }) => {
        await homePage.page.goto(testData.homeURL);
        await homePage.openProducts();
   });

    test("Verify product info", async ({ productDetail,product }) => {
        let firstProduct: Locator;
        let p_firstName:string;
        let p_fistPrice:string;
        let d_firstName:string;
        let d_firstPrice:string;
        
        await test.step("Verify url have /products",async()=>{
            await expect(product.page).toHaveURL(new RegExp(testData.productURL));
        });

        await test.step("Get first product",async()=>{
            firstProduct=product.listProduct.first();
        });

        await test.step("Save name and price of first product", async () => {
           p_firstName=await product.getProductName(firstProduct).innerText();
           p_fistPrice=await product.getProductPrice(firstProduct).innerText();
        });

        await test.step("Click view detail of first product",async()=>{
            await product.clickViewDetail(firstProduct);
        });

        await test.step("Verify goto product detail page",async()=>{
            await expect(productDetail.page).toHaveURL(new RegExp(testData.productDetailUrl));
        });

        await test.step("Verify hien thi cac field cua product detail",async()=>{
            await expect(productDetail.name).toBeVisible();
            await expect(productDetail.price).toBeVisible();
            await expect(productDetail.category).toBeVisible();
            await expect(productDetail.availablelity).toBeVisible();
            await expect(productDetail.brand).toBeVisible();
            await expect(productDetail.quantityInput).toBeVisible();
            await expect(productDetail.addToCardBtn).toBeVisible();
            await expect(productDetail.conditions).toBeVisible();
        });

        await test.step("Verify name and price are same with first product",async()=>{
            d_firstName=await productDetail.name.innerText();
            d_firstPrice=await productDetail.price.innerText();
            expect(d_firstName).toBe(p_firstName);
            expect(d_firstName).toBe(p_firstName);
        })
    })
})