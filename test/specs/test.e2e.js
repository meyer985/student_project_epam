const LoginPage = require('../pageobjects/pages/login.page');
const LoginForm = require('../pageobjects/components/loginForm.component');

const loginPage = new LoginPage();
const loginForm = new LoginForm();

describe('Test login feature', async () => {
   
    beforeEach(async () => {
        await loginPage.open();
        });

    it("Show error for empty credantials", async () => {
        await loginForm.input('username').setValue('Test_login');
        await loginForm.input('password').setValue('Test_password')
        await loginForm.clearInput('password');
        await loginForm.clearInput('username');
        await loginForm.input('login-button').click();
        await expect(loginForm.errorMessage()).toHaveText("Epic sadface: Username is required")
        })

    it("Show error when passing Username only", async () => {
        await loginForm.input('username').setValue('Test_login');
        await loginForm.input('password').setValue('Test_password')
        await loginForm.clearInput('password');
        await loginForm.input('login-button').click();
        await expect(loginForm.errorMessage()).toHaveText("Epic sadface: Password is required")
    })
   
    it("Can login when passing correct credantials", async () => {       
        const appLogo = await $('div[class="app_logo"]');
        
        await loginForm.input('username').setValue('standard_user');
        await loginForm.input('password').setValue('secret_sauce')
        await loginForm.input('login-button').click();

        await expect(appLogo).toBeDisplayed()
        await expect(appLogo).toHaveText("Swag Labs")

    })
   
})
