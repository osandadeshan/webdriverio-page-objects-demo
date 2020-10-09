import Page from "./page";

class LoginPage extends Page {

    get userNameTextBox() { return  $('#username'); }
    get passwordTextBox() { return $('#password') }
    get submitButton() { return $('button[type="submit"]') }
    get errorLabel() { return $('#flash') }

    open() {
        super.open('/login');
    }

    setUsername(username) {
        this.userNameTextBox.setValue(username);
    }

    setPassword(password) {
        this.passwordTextBox.setValue(password);
    }

    clickSubmitButton() {
        this.submitButton.click();
    }

}

export default new LoginPage();