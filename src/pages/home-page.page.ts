import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    page: Page;
    logo: Locator;
    navigationMenu: Locator;
    featuresItems: Locator;
    homeLink: Locator;
    productsLink: Locator;
    cartLink: Locator;
    loginLink: Locator;
    contactLink: Locator;



    constructor(page: Page) {
        this.page = page;
        this.logo = this.page.locator(".logo.pull-left").getByRole("img");
        this.navigationMenu = this.page.locator(".shop-menu.pull-right");
        this.featuresItems = this.page.locator(".features_items");
        this.homeLink = this.page.getByRole("link", { name: " Home" });
        this.productsLink = this.page.getByRole("link", { name: " Products" });
        this.cartLink = this.page.getByRole("link", { name: " Cart" });
        this.loginLink = this.page.getByRole("link", { name: " Signup / Login" });
        this.contactLink = this.page.getByRole("link", { name: " Contact us" });
    }
}