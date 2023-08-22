//it descreve o escopo de um teste
it ('Teste Externo', ()=>{

});

//describe agrupa testes
describe('Agrupador de Testes', ()=>{

  //é possivel agrupar um grupo de testes dentro de outro grupo
  describe('Agrupador de Testes Mais Específicos', ()=>{
    it ('Teste de um grupo mais específico de testes', ()=>{});
  });

  describe('Agrupador de Testes Mais Específicos', ()=>{
    //skip pula um teste ou um grupo
    it.skip('Teste de um grupo mais específico de testes', ()=>{});
  });

  //é póssivel dar skip em um grupo completo
  describe.skip('Agrupador de Testes Mais Específicos', ()=>{
    it ('Teste de um grupo mais específico de testes', ()=>{});
  });

  it ('Teste Interno', ()=>{});

});