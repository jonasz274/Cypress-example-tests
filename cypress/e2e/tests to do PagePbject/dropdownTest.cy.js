/// <reference types="cypress" />

describe('Dropdown tests', () => {
	beforeEach(() => {
		cy.visit('https://devexpress.github.io/testcafe/example/'); // wejście na strone
		cy.url().should('include', 'devexpress.github.io/testcafe/example'); //sprawdzenie url strony
		// cy.url().should("match",/devexpress.github.io/testcafe/example/) // aprawdzenie url strony regex-em
	});

	it('Dropdown', () => {
		//todo

		//cy.viewport(1024,600)

		cy.get('#populate').click();

		cy.get('#remote-testing').click();
		cy.get('#reusing-js-code').click();
		cy.get('#background-parallel-testing').click();
		cy.get('#continuous-integration-embedding').click();
		cy.get('#traffic-markup-analysis').click();
		cy.get('#tried-test-cafe').click();

		cy.get('#windows').click();
		cy.get('#slider').click('right');

		cy.get('#preferred-interface').select('JavaScript API'); //wybranie z listy roziwjanej
		cy.get('#preferred-interface').should('have.value', 'JavaScript API');

		cy.get('#preferred-interface').select(2); //wybranie z listy roziwjanej po numerowanej opcji
		cy.get('#preferred-interface').should('not.have.value', 'JavaScript API');

        cy.xpath('//*[@id="preferred-interface"]').select(0)

		//cy.screenshot();
		//cy.get('.col-2').screenshot()
	});
});
