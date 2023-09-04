describe("Helpers", () => {
  it("Wrap", () => {
    const objeto = { nome: "Usuário", idade: 20 };
    expect(objeto).to.have.property("nome");
    cy.wrap(objeto).should("have.property", "nome");

    //visita a página
    cy.visit("https://wcaquino.me/cypress/componentes.html");
    cy.get("#formNome").then(($el) => {
      cy.wrap($el).type("funciona?");
    });

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(10);
      }, 500);
    });

    cy.get("#buttonSimple").then(() => console.log("Encontrei o botão"));
    cy.wrap(promise).then((ret) => console.log(ret));
    cy.get("#buttonList").then(() => console.log("Encontrei o segundo botão"));

    cy.wrap(1)
      .then((num) => {
        return 2;
      })
      .should("be.equal", 2);
  });

  it("Its", () => {
    const objeto = { nome: "Usuário", idade: 20 };
    cy.wrap(objeto).should("have.property", "nome", "Usuário");
    cy.wrap(objeto).its("nome").should("be.equal", "Usuário");

    const objeto2 = {
      nome: "Usuário",
      idade: 20,
      endereco: { rua: "rua dos bobos" },
    };
    cy.wrap(objeto2).its("endereco").should("have.property", "rua");

    //visita a página
    cy.visit("https://wcaquino.me/cypress/componentes.html");
    cy.title().its("length").should("be.equal", 20);
  });

  it("Invoke", () => {
    const getValue = () => 1;
    //o objeto function tem a funcção getValue como atributo
    const soma = (a, b) => a + b;
    cy.wrap({ function: getValue }).invoke("function").should("be.equal", 1);
    cy.wrap({ function: soma }).invoke("function", 2, 5).should("be.equal", 7);

    cy.get("#formNome").invoke('val', 'Texto via Invoke');

    cy.window().invoke('alert', 'aoba!');

    cy.get('#resultado')
      .invoke('html', '<input type="button" value="hacked">')
  });
});
