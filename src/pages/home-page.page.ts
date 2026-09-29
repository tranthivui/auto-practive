import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    page: Page;
    logo: Locator;
    navigationMenu: Locator;
    featuresItems: Locator;
    smHome: Locator;
    smProducts: Locator;
        smCart: Locator;
        smLogin: Locator;
        smContact: Locator;



    constructor(page: Page) {
        this.page = page;
        this.logo = this.page.locator(".logo.pull-left").getByRole("img");
        this.navigationMenu = this.page.locator(".shop-menu.pull-right");
        this.featuresItems = this.page.locator(".features_items");
        this.smHome=this.page.getByRole("link",{name: " Home"});
                this.smProducts=this.page.getByRole("link",{name: " Products"});
                        this.smCart=this.page.getByRole("link",{name: " Cart"});
                                this.smLogin=this.page.getByRole("link",{name: " Signup / Login"});
        this.smContact=this.page.getByRole("link",{name: " Contact us"});


    }
}