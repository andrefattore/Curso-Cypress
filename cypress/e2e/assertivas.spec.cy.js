//Assertivas

it ('Igualdades', ()=>{
const a = 1;

//espera que o valor de 'a' seja 1
expect(a).equal(1);

//como tornar a leitura mais compreensível
expect(a).to.be.equal(1);

//espera que 'a' não seja igual a 'b'
expect('a').not.to.be.equal('b');

//simulação de erro com mensagem
//expect(a, 'Deveria ser 1').equal(2);
});

it ('Verdade', ()=>{

  const a = true;
  const b = null;
  let c;
  expect(a).to.be.true;
  expect(true).to.be.true;
  expect(b).to.be.null;
  expect(a).to.be.not.null;
  expect(c).to.be.undefined;

});

it ('Igualdade', ()=>{
const obj = {
  a:1,
  b:2
}

expect(obj).equal(obj);
expect(obj).equals(obj);
expect(obj).eq(obj);
expect(obj).to.be.equal(obj);

//deep compara tipos de dados diferentes
expect(obj).to.be.deep.equal({a:1,b:2});
expect(obj).eql({a:1,b:2});

//verifica se existe no objeto uma propriedade 'a' com valor '1'
expect(obj).include({a:1});

//verifica se o objeto possui a propriedade 'b'
expect(obj).to.have.property('b');

//verifica se o objeto possui uma propriedade 'b' com o valor '2'
expect(obj).to.have.property('b',2);

//verificar se um objeto está vazio
expect(obj).to.not.be.empty;

// fim it
});

it('Arrays', ()=>{

  const vetor = [1,2,3];

  //verifica se um array possui os membros 1, 2 e 3
  expect(vetor).to.have.members([1,2,3]);

  //verifica se o array possui os membros 1 e 3
  expect(vetor).to.include.members([1,3]);

  //verifica se um array não está vazio
  expect(vetor).to.not.be.empty;

  //verifica se o array está vazio
  expect([]).to.be.empty;

  //fim it
});

it('Tipos', ()=>{
  const num = 1;
  const str = "Alguma coisa";

  expect(num).to.be.a('number');
  expect(str).to.be.a('string');
  expect(str).to.be.a('string');
  expect({}).to.be.an('object');
  expect([]).to.be.an('array');

});

it('String', ()=>{

const str = "String de teste";

expect(str).to.be.equal("String de teste");
expect(str).to.have.length(15);
expect(str).to.contains("de");
expect(str).to.match(/de/);
expect(str).to.match(/^String/);
expect(str).to.match(/teste$/);
expect(str).to.match(/.{15}/);
expect(str).to.match(/\W+/);
expect(str).to.match(/\D+/);

});

it('Números', ()=>{
const number = 4;
const floatNumber= 5.2123;

expect(number).to.be.equal(4);
expect(number).to.be.above(3);
expect(number).to.be.below(7);
expect(floatNumber).to.be.equal(5.2123);
expect(floatNumber).to.be.closeTo(5.2, 0.1);
expect(floatNumber).to.be.above(5);

});