import { expect } from "@playwright/test";
import {test} from "../src/fixtures/product.fixture";
test.describe("Verify search product",async()=>{
    const testData = {
    homeURL: "https://automationexercise.com/",
    productURL: "https://automationexercise.com/products",
    keyWord: "Top"
    // menu: ["Home", "Products", "Cart", "Signup / Login", "- Contact us"]
  };
    test.beforeEach("Go to home page",async({product,homePage})=>{
        await product.page.goto(testData.homeURL);
        await homePage.openProducts();
        await expect(product.page).toHaveURL(testData.productURL);
    });

    test("Search product", async({product})=>{
        await test.step("Search",async()=>{
            await product.searchProduct(testData.keyWord);
        });
        await test.step("Verify heading",async()=>{
            await expect(product.searchHeading).toBeVisible();
        });
        await test.step("Verify list product",async()=>{
            await expect(product.listProduct.first()).toBeVisible();
            const totalProduct=await product.listProduct.count();
            expect(totalProduct).toBeGreaterThan(0);
            let found=false;
            for(let i=0;i<totalProduct;i++){
                let name=await product.getProductName(product.getProduct(i)).innerText();
                if(name.includes(testData.keyWord)){
                    found=true;
                    break;
                }
            };
            expect(found).toBe(true);
        })
    })

    test("Verify",async()=>{
        console.log("test");
    })
})