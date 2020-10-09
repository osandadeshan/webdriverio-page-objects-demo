import LoginPage from '../pageObjects/login.page';
import LoginFragment from '../fragments/login.fragment';

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginFragment.login('Osanda', 'Admin123');

        expect(LoginPage.errorLabel).toBeExisting();
        expect(LoginPage.errorLabel).toHaveTextContaining('Your username is invalid!');
    });
});