import { expect } from "@playwright/test";
import { test } from "../src/fixtures/page.fixture"

test.describe("Verify login function", async () => {
    const testData = {
        url: {
            home: "https://automationexercise.com/",
            login: "https://automationexercise.com/login"
        },
        user: {
            username: "automation_test_not_exist_2026@gmail.comm",
            password: "InvalidPassword123"
        },
        loginFailMess: "Your email or password is incorrect!",
        heading: "Login to your account"
    }

    test.beforeEach("Go to login page", async ({ homePage }) => {
        await test.step("Go to home page", async () => {
            await homePage.page.goto(testData.url.home);
        });

        await test.step("Go to login page", async () => {
            await homePage.clickLoginSingupLink();
        })
    });

    test("Verify login with incorrect user info", async ({ loginPage }) => {
        //Verify da vao trang login
        await expect(loginPage.page).toHaveURL(testData.url.login);
        //Verify heading
        await expect(loginPage.headingLogin).toHaveText(testData.heading);
        //Login
        await loginPage.login(testData.user.username, testData.user.password);
        //Verify show error messae
        await expect(loginPage.loginFailMess).toHaveText(testData.loginFailMess)
    })
})
