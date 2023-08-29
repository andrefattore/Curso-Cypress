describe("Trabalhando com Elementos Básicos", () => {
  //Antes de Tudo
  before(() => {
    //visita a página
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  //Antes de executar cada teste
  beforeEach(() => {
    //recarrega a página
    cy.reload();
  });

  it("Texto", () => {
    //verifica se 'body' contém a palavra cuidado
    cy.get("body").should("contain", "Cuidado");

    //verifica se o <span></span> com a classe '.facilAchar' contem a palavra 'Cuidado'
    cy.get(".facilAchar").should("contain", "Cuidado");
  });

  it.skip("Links", () => {
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

  //fim describe
});


describe("Teste de manipulação de inputs de texto", () => {
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  it("Campo de texto", () => {
    cy.get("#formNome")
      .type("Teste")
      .should("have.value", "Teste");

    //Quando o id tiver ':', colocar duas barras para que nenhum erro aconteça  
    cy.get("#elementosForm\\:sugestoes")
      .type("Teste")
      .should("have.value", "Teste");

  //tabelas
  cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
    .type('???');

  cy.get('[data-cy="dataSobrenome"]')
    .type('Teste12345{backspace}{backspace}')
    .should('have.value',"Teste123");
    
    cy.get("#elementosForm\\:sugestoes")
      .clear()
      .type('Erro{selectall}acerto',{delay:100})
      .should('have.value','acerto');
  });

  //fim describe
});




describe('Manipulação de Radio Buttons',()=>{

//Antes de Tudo
before(() => {
  //visita a página
  cy.visit("https://wcaquino.me/cypress/componentes.html");
});

//Antes de executar cada teste
beforeEach(() => {
  //recarrega a página
  cy.reload();
});


  it('Validar Radio Buttons',()=>{
    cy.get('#formSexoMasc').check()
  });
  
});

describe('Manipulando Combo box', ()=>{

  //Antes de Tudo
  before(() => {
    //visita a página
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  //Antes de executar cada teste
  beforeEach(() => {
    //recarrega a página
    cy.reload();
  });

  it('Combo',()=>{
  
    
    cy.get('[data-test="dataEscolaridade"]')
        .select('2o grau completo')
        .should('have.value', '2graucomp'); //verificar o 'value' por meio das ferramentas de desenvolvedor
    
    cy.get('[data-test="dataEscolaridade"]')
        .select('1graucomp')
        .should('have.value', '1graucomp'); 
 
  });
  
  
  //fim describe
  });