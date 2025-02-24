/// <reference types="cypress" />

describe('Bank Practice test', () => {
	beforeEach(() => {
		cy.visit('https://practice.expandtesting.com/login'); // wejście na strone
		cy.url().should('include', 'practice.expandtesting.com/login'); //sprawdzenie url strony
	});

	it('Login in Bank, possitive', () => {
		const usernameBox = '#username';
		const passwordBox = '#password';
		const loginBtn = '#login > .btn';
		const alertSuccessLocator = '.alert-success';

		cy.fixture('practiceBankData.json').then((myBankData) => {
			cy.get(usernameBox).clear();
			cy.get(usernameBox).type(myBankData.username);

			cy.get(passwordBox).clear();
			cy.get(passwordBox).type(myBankData.password);

			cy.get(loginBtn).click();
		});

		cy.get('.alert-success').should('be.visible');
		cy.get('#flash').should('contain', 'You logged into a secure area!');
	});
});
