class LoginForm {

 input(name) {
    return  $(`input[data-test=${name}]`)
}

errorMessage() {
return $('h3[data-test="error"]');
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

module.exports = LoginForm;