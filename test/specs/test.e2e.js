const LoginPage = require('../pageobjects/pages/login.page');
const LoginForm = require('../pageobjects/components/loginForm.component');
const Dashboard = require('../pageobjects/components/dashboard.component');

const loginPage = new LoginPage();
const loginForm = new LoginForm();
const dashboard = new Dashboard();

describe('Test login feature', async () => {
    
    beforeEach(async () => {
        await loginPage.open();
        });

    it("Show error for empty credantials", async () => {
        await loginForm.input('user-name').setValue('Test_login');
        await loginForm.input('password').setValue('Test_password')
        await loginForm.clearInput('password');
        await loginForm.clearInput('username');
        await loginForm.input('login-button').click();
        await expect(loginForm.errorMessage()).toHaveText("Epic sadface: Username is required")
        });

    it("Show error when passing Username only", async () => {
        await loginForm.input('user-name').setValue('Test_login');
        await loginForm.input('password').setValue('Test_password')
        await loginForm.clearInput('password');
        await loginForm.input('login-button').click();
        await expect(loginForm.errorMessage()).toHaveText("Epic sadface: Password is required")
    });
   
    it("Can login when passing correct credantials", async () => {  
        await loginForm.input('user-name').setValue('standard_user');
        await loginForm.input('password').setValue('secret_sauce')
        await loginForm.input('login-button').click();

        await expect(dashboard.element()).toBeDisplayed()
        await expect(dashboard.element()).toHaveText("Swag Labs")
    });
   
})
