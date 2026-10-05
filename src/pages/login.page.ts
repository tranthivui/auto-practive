import { Locator, Page } from "@playwright/test";

export class LoginPage {
    page: Page;
    headingLogin: Locator;
    loginForm: Locator;
    email: Locator;
    password: Locator;
    loginBtn: Locator;
    loginFailMess: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headingLogin = this.page.getByRole("heading", { name: "Login to your account" });
        this.loginForm=this.page.locator(".login-form")
        this.email = this.loginForm.getByPlaceholder("Email Address");
        this.password = this.loginForm.getByPlaceholder("Password");
        this.loginBtn = this.page.getByRole("button", { name: "Login" });
        this.loginFailMess = this.loginForm.locator("p");
    }

    async fillEmail(email: string) {
        await this.email.fill(email);
    }

    async fillPassword(password: string) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginBtn.click();
    }

    async login(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLogin();
    }
}