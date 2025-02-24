const selectors = {
	loginTextBox: '#user_login',
	passwordTexBox: '#user_password',
	singInButton: '[name="submit"]',
	alertLocator: '.alert',
};

const url = 'http://zero.webappsecurity.com/login.html';
const expectURL = 'zero.webappsecurity.com/login.html';
const alertText = 'Login and/or password are wrong.';

class LoginPage {
	goToURL() {
		cy.visit(url);
		cy.url().should('include', expectURL);
	}

	verifyIfBasicElementsAreDisplayed() {
		cy.get(selectors.loginTextBox).should('be.visible');
		cy.get(selectors.passwordTexBox).should('be.visible');
		cy.get(selectors.singInButton).should('be.visible');
	}

	fillCredentialsData(usernameData, passwordData) {
		cy.get(selectors.loginTextBox).clear();
		cy.get(selectors.passwordTexBox).clear();
		cy.get(selectors.loginTextBox).type(usernameData);
		cy.get(selectors.passwordTexBox).type(passwordData);
	}
	clickSingInButton() {
		cy.get(selectors.singInButton).click();
	}

	verifyLoginPasswordWrongAlert() {
		cy.get(selectors.alertLocator).should('be.visible');
		cy.get(selectors.alertLocator).should('contain', alertText);
	}
}

export default LoginPage;
