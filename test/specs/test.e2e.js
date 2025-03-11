/*describe('Test', async () => {
it('test', () => {
    expect(1).toBe(1)
})

})*/


describe('Login form with empty credentials', async () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/')
       
    });

    //put in login
    //put in password 
    it("Should be able to put in credantials", async () => {
        const loginInput = await $('input[data-test="username"]');
        const passwordInput = await $('input[data-test="password"]');
        await loginInput.setValue('Test_login');
        await passwordInput.setValue('Test_password');
        await expect(loginInput).toHaveValue('Test_login');
        await expect(passwordInput).toHaveValue('Test_password');

    })
    
    //clear  login
    //clear  password 
    it("Should be able to clear credantials", async () => {
        const loginInput = await $('input[data-test="username"]');
        const passwordInput = await $('input[data-test="password"]');
        await loginInput.setValue('');
        await passwordInput.setValue('');
        await expect(loginInput).toHaveValue('');
        await expect(passwordInput).toHaveValue('');

    })

    //click Login and check for error method
    it("Should pop-up error message for empty credantials", async () => {
        const loginButton = await $('input[data-test="login-button"]');
        const errorMessage = await $('h3[data-test="error"]');
        await loginButton.click();
        await expect(errorMessage).toBeDisplayed()
        await expect(errorMessage).toHaveText("Epic sadface: Username is required")

    })

})
    