class LoginForm {

input(selector) {
   return  $(`//*[@id="${selector}"]`)
}

errorMessage() {
return $('//*[@id="login_button_container"]/div/form/div[3]/h3');
}

async clearInput(selector) {
    console.log(selector);
    await browser.execute((selector) => {
        const field = document.querySelector(`input[data-test=${selector}]`);
        if (field) {
            field.select(); 
        }
    }, selector); 
    await browser.keys('Backspace'); 
    }
}

module.exports = LoginForm
