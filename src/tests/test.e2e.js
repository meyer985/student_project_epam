const LoginPage = require('../pageobjects/pages/login.page.js');
const credentials = require('../utils/dataProvider.js'); 
const MainPage = require('../pageobjects/pages/main.page.js');
const {LOGIN_ERROR, PASSWORD_ERROR } = require('../utils/constants.js')

const loginPage = new LoginPage();
const mainPage = new MainPage();

describe('Test login feature', async () => {

    beforeEach(async () => {
        await loginPage.open();
        });

       credentials.forEach(({ username, password }) => {
        it("Show error for empty credantials", async () => {
            await loginPage.form.input('user-name').setValue(username);
            await loginPage.form.input('password').setValue(password);
            await loginPage.form.clearInput('username');
            await loginPage.form.clearInput('password');
            await loginPage.form.input('login-button').click();
            await expect(loginPage.form.errorMessage()).toHaveText(LOGIN_ERROR)
            }); 
       });

       credentials.forEach(({ username, password }) => {
        it("Show error when passing Username only", async () => {
            await loginPage.form.input('user-name').setValue(username);
            await loginPage.form.input('password').setValue(password);
            await loginPage.form.clearInput('password');
            await loginPage.form.input('login-button').click();
            await expect(loginPage.form.errorMessage()).toHaveText(PASSWORD_ERROR);
        });
       });

       credentials.forEach(({ username, password, isCorrect, result }) => {
        it("Should login when passing correct credantials", async () => {  
            await loginPage.form.input('user-name').setValue(username);
            await loginPage.form.input('password').setValue(password)
            await loginPage.form.input('login-button').click();

            if(isCorrect) {
                await expect(mainPage.page()).toBeDisplayed()
                await expect(mainPage.dashboard.header()).toHaveText(result)   
            } else {
                await expect(mainPage.page()).not.toBeDisplayed()
                await expect(loginPage.form.errorMessage()).toHaveText(result)  
            }
             });
       });
   });
