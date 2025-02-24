describe("Books test", () =>{
    beforeEach(() => {

        cy.visit('https://books.toscrape.com/'); // wejście na strone
        cy.url().should("include","books.toscrape.com"); //sprawdzenie url strony
        cy.url().should("match",/books.toscrape.com/) // aprawdzenie url strony regex-em
      })

    it("Visit page", () =>{
        //todo

        const  booksList = cy.get('li ul li')

        cy.get(' li ul li').should("be.visible") // sprawdzenie wszytskich elementu 

        cy.log("ilość książek ")
        cy.log(booksList)


        cy.get('li ul li').first().should("be.visible") // sprawdzenie pierwszego elementu 
        cy.get('li ul li').last().should("be.visible") // sprawdzenie ostatniego elementu 
        cy.get('li ul li').eq(6).should("be.visible") // sprawdzenie ostatniego elementu 
        cy.get('li ul li').eq(-6).should("be.visible") // sprawdzenie ostatniego elementu 


        cy.get('li ul li').its('length').should('eq', 50);
        cy.get('li ul li').contains('Fiction').should('be.visible')

        cy.get('li ul li').contains('Fiction').click();

        cy.contains('Books').click();

        cy.log('Koniec testu')
        
    });

});