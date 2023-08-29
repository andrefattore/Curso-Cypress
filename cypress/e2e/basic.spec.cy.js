//describe agrupa testes
describe("Cypress básico", () => {
  it("Visitar uma página para verificar o título", () => {
    //abre a página que vamos testar
    cy.visit("https://wcaquino.me/cypress/componentes.html");

    //const title = cy.title();
    //console.log(title);

    //imprimindo o titulo
    cy.title().then(title=>{
      console.log(title);
    });

    //titulo deveria ser igual a 'Campo de treinamento'
    cy.title().should("be.equal", "Campo de Treinamento");
  });

  it("Deverá encontrar e interagir com um elemento", () => {
    
    cy.visit("https://wcaquino.me/cypress/componentes.html");

    //comando para localizar um elemento
    cy.get('#buttonSimple')
        .click()
        //deve ter o valor "obrigado"
        .should('have.value', 'Obrigado!');


  });
});
