describe("My first tests", () =>{

    it("Check if true", () =>{
        expect(true).to.equal(true);
    });

    it("Chceck if true = false", () =>{
        //todo
        expect(true).to.equal(false);
    });

    it("Chceck nembers", () =>{
        //todo
        expect(7).to.equal(7);
    });

    it.only("Visit page", () =>{
        //todo
        cy.visit('https://www.example.com/', {timeout: 1000}); // wejście na strone

        cy.url().should("include","example.com"); //sprawdzenie url strony

        cy.url().should("match",/example.com/) // aprawdzenie url strony regex-em

        cy.get("h1").should("be.visible"); //pobranie elementu i sprawdzenie czy jest widoczny 
        cy.get("h2").should("not.exist"); //pogranie elementu i sprawdzenie czy nie jest widoczny 

    });

});