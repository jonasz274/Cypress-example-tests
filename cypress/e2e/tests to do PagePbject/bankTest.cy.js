/// <reference types="cypress" />

describe("Bank test", () => {
  beforeEach(() => {

    cy.visit('http://zero.webappsecurity.com/login.html'); // wejście na strone
    cy.url().should("include", "zero.webappsecurity.com/login.html"); //sprawdzenie url strony
    cy.url().should("match", /zero.webappsecurity.com/) // aprawdzenie url strony regex-em
  })

  it("Login in Bank, possitive", () => {

    const loginBox = cy.get('#user_login');
    const passwordBox = cy.get('#user_password')
    //const SinInBtn = cy.get('btn-primary')

    loginBox.clear()
    loginBox.type("username")

    //cy.get('#user_login').clear();
    //cy.get('#user_login').type("username")

    passwordBox.clear()
    passwordBox.type('password')

    cy.get('[name="submit"]').click();

    //cy.get('#user_password').clear()
    //cy.get('#user_password').type('password')

    cy.get('#searchTerm').should("be.visible")

    //cy.pause();  zatrzymuje test w danym miejscu 
    cy.go('back');


    //  cy.get('dropdown open').click()

  });


  it("Login in Bank, negative", () => {

    cy.viewport(1920, 1080) // ustawienie rozdzielczosci

    const loginBox = '#user_login';
    const passwordBox = '#user_password'
    const subBtn = '[name="submit"]'
    const alertLocator = '.alert'
    const alertTex = 'Login and/or password are wrong'

    cy.get(loginBox).as('myUsername') // as twoży alias 

    cy.get(loginBox).clear()
    cy.get(loginBox).type("usernameeee")

    //cy.get('#user_login').clear();
    //cy.get('#user_login').type("username")

    cy.get(passwordBox).clear()
    cy.get(passwordBox).type('passworddddd')

    cy.get(subBtn).click();

    //cy.get('#user_password').clear()
    //cy.get('#user_password').type('password')

    //cy.get('.alert').should("be.visible")

    cy.get(alertLocator).should("be.visible");
    cy.get(alertLocator).should('contain', alertTex);

    cy.get('.offset3 > a').focus();

  });


  it("Login in Bank, possitive, transfer", () => {

    const loginBox = '#user_login';
    const passwordBox = '#user_password'
    const subBtn = '[name="submit"]'

    cy.get(loginBox).as('myUsername') // as twoży alias 

    cy.get(loginBox).clear()
    cy.get(loginBox).type("username")

    cy.get(passwordBox).clear()
    cy.get(passwordBox).type('password')

    cy.get(subBtn).click();

    cy.get('#searchTerm').should("be.visible")

    cy.go('back');

    // transfer 
    cy.get('#transfer_funds_link').click();
    cy.get('#tf_fromAccountId').select(2);
    cy.get('#tf_toAccountId').select(1);
    cy.get('#tf_amount').type(500)
    cy.get('#tf_description').type('Transfer to my frend')
    cy.get('#btn_submit').click();
    cy.get('#btn_submit').click();
    cy.get('.alert-success').should("be.visible");
    cy.get('.alert-success').should('contain', 'You successfully submitted your transaction.');

  });




});