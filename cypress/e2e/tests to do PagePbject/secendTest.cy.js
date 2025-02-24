describe("My escend tests", () =>{



    it("Visit page", () =>{
        //todo
        cy.visit('https://fakestore.testelka.pl/'); // wejście na strone

        cy.url().should("include","fakestore.testelka.pl"); //sprawdzenie url strony

        cy.url().should("match",/fakestore.testelka.pl/) // aprawdzenie url strony regex-em

        


    });

});