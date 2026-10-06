import { Locator, Page } from "@playwright/test";

export class ProductDetail{
    page: Page;
    productInfo: Locator;
    name: Locator; 
    category: Locator;
    price: Locator;
    availablelity: Locator;
    brand: Locator;
    quantityInput: Locator;
    addToCardBtn: Locator;
    conditions: Locator;

    constructor(page:Page){
        this.page=page;
        this.productInfo=this.page.locator(".product-information");
        this.name=this.productInfo.getByRole("heading",{level:2});
        this.category=this.productInfo.getByText(/Category/);
        this.price=this.productInfo.getByText(/Rs/);
        this.availablelity=this.productInfo.getByText(/Availability/);
        this.brand=this.productInfo.getByText(/Brand/);
        this.quantityInput=this.productInfo.locator("#quantity");
        this.addToCardBtn=this.productInfo.locator(".btn.btn-default.cart");
        this.conditions=this.productInfo.getByText(/Condition/);
    }
}