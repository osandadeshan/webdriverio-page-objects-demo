import LoginPage from '../pageObjects/login.page'

class LoginFragment {

    login(username, password) {
        LoginPage.setUsername(username);
        LoginPage.setPassword(password);
        LoginPage.clickSubmitButton();
    }

}

export default new LoginFragment();