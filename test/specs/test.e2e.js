
describe('Test login feature', async () => {
   
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/')
       
    });

    it("Show error for empty credantials", async () => {
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

        await browser.execute(() => {
            const inputElement = document.querySelector('input[data-test="username"]');
            inputElement.select(); // Выделяет весь текст в поле ввода
        });

        await browser.keys('Backspace')
       
        await expect(loginInput).toHaveValue('');
        await expect(passwordInput).toHaveValue('');
        await loginButton.click();
        await expect(errorMessage).toBeDisplayed()
        await expect(errorMessage).toHaveText("Epic sadface: Username is required")

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
   
    it("It log in when passing correct credantials", async () => {
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
