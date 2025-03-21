const LoginForm = require("../components/loginForm.component");

class LoginPage {
    constructor() {
        this.form = new LoginForm();
    }

    async open() {
        await browser.url("/");
    }
}

module.exports = LoginPage;