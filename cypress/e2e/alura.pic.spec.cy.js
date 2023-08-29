describe('Teste de manipulação de inputs de texto', ()=>{

    before(()=>{
        cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home");
        });
        
        
    it('Login na plataforma',()=>{

        //usuário
        cy.get('[data-test="loginUserName"]').type("joao1");
        cy.get('[data-test="loginUserName"]').should('have.value','joao1');   

        //senha
        cy.get('[data-test="loginPassword"]').type("1234abcd");
        cy.get('[data-test="loginPassword"]').should('have.value','1234abcd'); 

        //clicando no botão de login
        cy.get('[data-test="loginBtn"]').click();


        //Abrir menu
        cy.get('.navbar-brand > .fa').click();

        //Entrar na tela de uploads
        cy.get('li > a').click();

        //Fechar menu
        cy.get('.menu-bar > .fa').click();

        //abrir tela de seleção de imagem
        cy.get('.form-group > .btn').click();

        //Esperar até o upload da imagem
        cy.wait(12000);

        //inserir descrição na imagem
        cy.get('.form-control').type('Todos Saúdam a Grande Tiamat');

        //finalizar upload
        cy.get(':nth-child(3) > .btn-primary').click();





    });

});