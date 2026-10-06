import { expect, Locator } from "@playwright/test";
import { test } from "../src/fixtures/page.fixture";
import { ProductDetail } from "../src/pages/product-detail.page";
test.describe("Verify search product", async () => {
    const testData = {
        url: {
            home: "https://automationexercise.com/",
            product: "/products",
            productDetail: "/product_details/"
        },
        keyWord: "Top"
    };

    test.beforeEach("Go to home page", async ({ homePage }) => {
        await test.step("Go to home page", async () => {
            await homePage.page.goto(testData.url.home);
        });
        await test.step("Click menu Products", async () => {
            await homePage.openProducts();
        })
    });

    test("Search product TC003", { tag: "@smoke" }, async ({ product, productDetail }) => {
        await test.step("Verify dang o /products", async () => {
            await expect(product.page).toHaveURL(new RegExp(testData.url.product));
        });

        await test.step("Search", async () => {
            await product.searchProduct(testData.keyWord);
        });
        await test.step("Verify heading", async () => {
            await expect(product.searchHeading).toBeVisible();
        });
        await test.step("Verify list product", async () => {
            await expect(product.listProduct.first()).toBeVisible();
            const totalProduct = await product.listProduct.count();
            expect(totalProduct).toBeGreaterThan(0);
            let found = false;
            for (let i = 0; i < totalProduct; i++) {
                let name = await product.getProductName(product.getProduct(i)).innerText();
                if (name.includes(testData.keyWord)) {
                    found = true;
                    break;
                }
            };
            expect(found).toBe(true);
        })
    });

    test("Verify go to product detail TC006", async ({ product, productDetail }) => {
        let firstProduct: Locator;
        let productName: string;
        let productPrice: string;
        await test.step("Verify dang o /products", async () => {
            await expect(product.page).toHaveURL(new RegExp(testData.url.product));
        });

        await test.step("Search", async () => {
            await product.searchProduct(testData.keyWord);
        });
        await test.step("Verify heading", async () => {
            await expect(product.searchHeading).toBeVisible();
        });
        await test.step("Verify co it nhat 1 search result", async () => {
            await expect(product.listProduct.first()).toBeVisible();
        })
        await test.step("Get first product", async () => {
            firstProduct = product.listProduct.first();
        });
        await test.step("Save product name and price", async () => {
            productName = await product.getProductName(firstProduct).innerText();
            productPrice = await product.getProductPrice(firstProduct).innerText();
        });
        await test.step("Click view detai product", async () => {
            await product.clickViewDetail(firstProduct);
        });
        await test.step("Verify url chuyen sang /product_detail/", async () => {
            await expect(productDetail.page).toHaveURL(new RegExp(testData.url.productDetail));
        });
        await test.step("Verify product detail hien thi", async () => {
            await expect(productDetail.name).toBeVisible();
            await expect(productDetail.price).toBeVisible();
            await expect(productDetail.category).toBeVisible();
            await expect(productDetail.availability).toBeVisible();
            await expect(productDetail.brand).toBeVisible();
            await expect(productDetail.quantityInput).toBeVisible();
            await expect(productDetail.addToCartBtn).toBeVisible();
            await expect(productDetail.condition).toBeVisible();
        });

        await test.step("Verify detail name/price same search name/price", async () => {
            await expect(productDetail.name).toHaveText(productName);
            await expect(productDetail.price).toHaveText(productPrice);
        })
    })
})