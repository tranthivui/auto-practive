import { Locator, Page } from "@playwright/test";

export class Product {
    page: Page;
    productHeading: Locator;
    listProduct: Locator;
    //  productItem: Locator;
    //  productName: Locator;
    //  productPrice: Locator;
    //  viewProduct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productHeading = this.page.getByRole("heading", { level: 2, name: "ALL PRODUCTS" });
        this.listProduct = this.page.locator(".features_items").locator(".col-sm-4")
        //   this.productItem = this.listProduct.first();
        //   this.productName = this.productItem.locator(".overlay-content p");
        //   this.productPrice = this.productItem.locator(".overlay-content h2");
        //   this.viewProduct = this.productItem.getByRole("link", {name: "View Product" });
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
}