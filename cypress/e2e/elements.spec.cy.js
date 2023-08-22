describe("Trabalhando com Elementos Básicos", () => {
  //Antes de Tudo
  before(() => {
    //visita a página
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  //Antes de executar cada teste
  before(() => {
    //recarrega a página
    cy.reaload();
  });

  it("Texto", () => {
    //verifica se 'body' contém a palavra cuidado
    cy.get("body").should("contain", "Cuidado");

    //verifica se o <span></span> com a classe '.facilAchar' contem a palavra 'Cuidado'
    cy.get(".facilAchar").should("contain", "Cuidado");
  });

  it("Links", () => {
    //Encontra e clica em um link
    cy.get('[href="#"]').click();

    //Verifica se o elemento com id 'resultado' tem o texto 'Voltou!'
    cy.get("#resultado").should("have.text", "Voltou!");

    //recarrega a página
    cy.reload();

    //verifica se o elemento com id 'resultado' não tem o texto 'Voltou!'
    cy.get("#resultado").should("have.not.text", "Voltou!");

    //clica no texto 'voltar'
    cy.contains("Voltar").click();

    //Verifica se o elemento com id 'resultado' tem o texto 'Voltou!'
    cy.get("#resultado").should("have.text", "Voltou!");
  });
});
