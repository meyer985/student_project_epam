const LoginPage = require('../pageobjects/pages/login.page');
const LoginForm = require('../pageobjects/components/loginForm.component');
const Dashboard = require('../pageobjects/components/dashboard.component');
const credentials = require('../data/dataProvider.js'); 

const loginPage = new LoginPage();
const loginForm = new LoginForm();
const dashboard = new Dashboard();

console.log(credentials[0]);
console.log(typeof credentials);

describe('Test login feature', async () => {

    beforeEach(async () => {
        await loginPage.open();
        });

       credentials.forEach(({ username, password }) => {
        it("Show error for empty credantials", async () => {
            await loginForm.input('user-name').setValue(username);
            await loginForm.input('password').setValue(password)
            await loginForm.clearInput('username');
            await loginForm.clearInput('password');
            await loginForm.input('login-button').click();
            await expect(loginForm.errorMessage()).toHaveText("Epic sadface: Username is required")
            }); 
       });

       credentials.forEach(({ username, password }) => {
        it("Show error when passing Username only", async () => {
            await loginForm.input('user-name').setValue(username);
            await loginForm.input('password').setValue(password);
            await loginForm.clearInput('password');
            await loginForm.input('login-button').click();
            await expect(loginForm.errorMessage()).toHaveText("Epic sadface: Password is required")
            });
       });

       credentials.forEach(({ username, password, isCorrect, result }) => {
        it("Should login when passing correct credantials", async () => {  
            await loginForm.input('user-name').setValue(username);
            await loginForm.input('password').setValue(password)
            await loginForm.input('login-button').click();

            if(isCorrect) {
                await expect(dashboard.element()).toBeDisplayed()
                await expect(dashboard.element()).toHaveText(result)   
            } else {
                await expect(dashboard.element()).not.toBeDisplayed()
                await expect(loginForm.errorMessage()).toHaveText(result)  
            }
             });
       });
   });


