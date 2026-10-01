import { Locator, Page } from "@playwright/test";

export class Product {
    page: Page;
    productHeading: Locator;
    listProduct: Locator;
    searchInput: Locator;
    searchBtn: Locator;
    searchHeading: Locator;
    //  productItem: Locator;
    //  productName: Locator;
    //  productPrice: Locator;
    //  viewProduct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productHeading = this.page.getByRole("heading", { level: 2, name: "ALL PRODUCTS" });
        this.listProduct = this.page.locator(".features_items").locator(".col-sm-4");
        this.searchInput=this.page.getByPlaceholder("Search Product");
        this.searchBtn=this.page.locator("#submit_search");
        this.searchHeading=this.page.getByRole("heading",{level:2,name:"Searched Products"})
    }

    getProduct(i: number): Locator {
        return this.listProduct.nth(i);
    }

    getProductName(product: Locator): Locator {
        return product.locator(".overlay-content p");
    }

    getProductPrice(product: Locator): Locator {
        return product.locator(".overlay-content h2");
    }

    getViewProductDetail(product: Locator): Locator {
        return product.getByRole("link", { name: "View Product" });
    }

    async inputSearchKeyword(keyWord:string){
        await this.searchInput.fill(keyWord);
    }

    async clickSearchBtn(){
        await this.searchBtn.click();
    }

    async searchProduct(keyWord:string){
        await this.inputSearchKeyword(keyWord);
        await this.clickSearchBtn();
    }
}