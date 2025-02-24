/// <reference types="cypress" />

describe('Bank test, file', () => {
	beforeEach(() => {
		cy.visit('http://zero.webappsecurity.com/login.html'); // wejście na strone
		cy.url().should('include', 'zero.webappsecurity.com/login.html'); //sprawdzenie url strony
		cy.url().should('match', /zero.webappsecurity.com/); // aprawdzenie url strony regex-em
	});

	it('Login in Bank, negative, file', () => {
		// cy.viewport(1920, 1080) // ustawienie rozdzielczosci

		const loginBox = '#user_login';
		const passwordBox = '#user_password';
		const subBtn = '[name="submit"]';
		const alertLocator = '.alert';
		//const alertTex = 'Login and/or password are wrong'

		cy.fixture('bankData.json').then((myBankData) => {
			cy.get(loginBox).as('myUsername'); // as twoży alias

			cy.get(loginBox).clear();
			cy.get(loginBox).type(myBankData.wrongEmail);

			//cy.get('#user_login').clear();
			//cy.get('#user_login').type("username")

			cy.get(passwordBox).clear();
			cy.get(passwordBox).type(myBankData.wrongPassword);

			cy.get(subBtn).click();

			//cy.get('#user_password').clear()
			//cy.get('#user_password').type('password')

			//cy.get('.alert').should("be.visible")

			cy.get(alertLocator).should('be.visible');
			cy.get(alertLocator).should('contain', myBankData.alertText);
		});

		cy.get('.offset3 > a').focus();
	});

	it('Write to file ', () => {
		cy.writeFile('cypress/fixtures/bankData.json', {
			wrongEmail: 'wrong_emailNEW',
			wrongPassword: 'this_is_wrong_passwaorNEW',
			alertText: 'Login and/or password are wrongNEW',
		});
	});
});
