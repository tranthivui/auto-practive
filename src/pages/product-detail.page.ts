import { Locator, Page } from "@playwright/test";

export class ProductDetail{
    page: Page;
    productInfo: Locator;
    name: Locator; 
    category: Locator;
    price: Locator;
    availability: Locator;
    brand: Locator;
    quantityInput: Locator;
    addToCartBtn: Locator;
    condition: Locator;

    constructor(page:Page){
        this.page=page;
        this.productInfo=this.page.locator(".product-information");
        this.name=this.productInfo.getByRole("heading",{level:2});
        this.category=this.productInfo.getByText(/Category/);
        this.price=this.productInfo.getByText(/Rs/);
        this.availability=this.productInfo.getByText(/Availability/);
        this.brand=this.productInfo.getByText(/Brand/);
        this.quantityInput=this.productInfo.locator("#quantity");
        this.addToCartBtn=this.productInfo.locator(".btn.btn-default.cart");
        this.condition=this.productInfo.getByText(/Condition/);
    }
}