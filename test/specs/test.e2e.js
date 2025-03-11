const LoginPage = require('../pageobjects/pages/login.page')
const LoginForm = require('../pageobjects/components/loginForm.component')

   

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
        const loginInput = await $('input[data-test="username"]');
        const passwordInput = await $('input[data-test="password"]');
        const loginButton = await $('input[data-test="login-button"]');
        const errorMessage = await $('h3[data-test="error"]');
        await loginInput.setValue('Test_login');
        await passwordInput.setValue('Test_password');
        await expect(loginInput).toHaveValue('Test_login');
        await expect(passwordInput).toHaveValue('Test_password');

        await browser.execute(() => {
            const inputElement = document.querySelector('input[data-test="password"]');
            inputElement.select(); // Выделяет весь текст в поле ввода
        });

        await browser.keys('Backspace')
       
        await expect(passwordInput).toHaveValue('');
        await loginButton.click();
        await expect(errorMessage).toBeDisplayed()
        await expect(errorMessage).toHaveText("Epic sadface: Password is required")

    })
   
    it("Can login when passing correct credantials", async () => {
        const loginInput = await $('input[data-test="username"]');
        const passwordInput = await $('input[data-test="password"]');
        const loginButton = await $('input[data-test="login-button"]');
        const appLogo = await $('div[class="app_logo"]');
        await loginInput.setValue('standard_user');
        await passwordInput.setValue('secret_sauce');
        await expect(loginInput).toHaveValue('standard_user');
        await expect(passwordInput).toHaveValue('secret_sauce');
        await loginButton.click();
        await expect(appLogo).toBeDisplayed()
        await expect(appLogo).toHaveText("Swag Labs")

    })
   
})
