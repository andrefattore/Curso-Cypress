describe("Esperas...", () => {
    //Antes de Tudo
    beforeEach(() => {
      //visita a página
      cy.visit("https://wcaquino.me/cypress/componentes.html");
    });
  
    //Antes de executar cada teste
    beforeEach(() => {
      //recarrega a página
      cy.reload();
    });

    it('Deve aguardar o elemento estar disponível',()=>{
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo').should('exist');
        cy.get('#novoCampo').type('funciona');
    });

    it('Uso do find', ()=>{
        cy.get('#buttonList').click();
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1');

       /* cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2');*/

            cy.get('#lista li span')
            .should('contain', 'Item 2');
    });

    it ('Uso do Timeout', ()=>{
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo', {timeout:5000}).should('exist');
    });

    it('Uso do wait', ()=>{
        cy.get('#buttonList').click();
        cy.wait(5000);
        cy.get('#lista li span')
        .should('contain', 'Item 2');
    });

    it('Click retry', ()=>{
        cy.get('#buttonCount')
            .click()
            .should('have.value','1');
    });

    it('Then', ()=>{
        cy.get('#buttonListDOM').then($el =>{
            //console.log($el);
            expect($el).to.have.length(1);
            
        }).and('have.id','buttonListDOM')
    });

});