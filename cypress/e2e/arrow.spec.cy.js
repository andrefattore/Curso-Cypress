it ('nada agora', function(){ })

/* Functions

function soma(a,b){
  return a + b;
}


/*const soma = function(a,b){
  return a+b;
}
*/


/*Arrow Function
São funções anonimas que devem ser atribuidas a uma variável

const soma = (a,b) =>{
  return a + b;
}

const soma = (a,b)=> a+b;

Neste exemplo o retorno será 'undefined', pois o return só é
explicito nestes casos = const soma = (a,b)=> a+b;

  const soma = (a,b)=>{
  a+b;
}

Arrow function com apenas um parâmetro

const soma = a => a + a

Arrow function sem parâmetros

const getRandomNumber = () => Math.random();
*/

const soma = (a,b)=> a+b;

console.log(soma(1,4));

it('a function test...', function(){
  console.log('Function',this);
});

it('an arrow test...', ()=>{
  console.log('Arrow',this);
});

//Casos de uso
let roupas = [
  {produto: 'Camisa', preco:25, cor:'Amarelo'},
  {produto: 'Calça', preco:80, cor:'Azul'},
  {produto: 'Jaqueta', preco:100, cor:'Preto'},
  {produto: 'Camiseta', preco:15, cor:'Rosa'},
  {produto: 'Calção', preco:20, cor:'Azul'},
];

let precoMaiorQue50 = roupas.filter((roupa)=>{
  return roupa.preco >=50;
});

console.log(precoMaiorQue50);