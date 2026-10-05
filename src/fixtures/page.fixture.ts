import { test as base } from "@playwright/test";
import { HomePage } from "../pages/home-page.page";
import { ProductPage } from "../pages/product.page";
import { LoginPage } from "../pages/login.page";
type PageFixture = {
    homePage: HomePage;
    product: ProductPage;
    loginPage: LoginPage
};

export const test = base.extend<PageFixture>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    product: async ({ page }, use) => {
        const product = new ProductPage(page);
        await use(product);
    },
    loginPage: async ({ page }, use) => {
        const login = new LoginPage(page);
        await use(login)
    }
})