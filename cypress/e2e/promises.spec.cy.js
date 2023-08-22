it("sem testes, ainda", () => {});
//Função Padrão
//function getSomething(){
//  return 10;
//}

//Arrow Function
const getSomething = () =>{ 
  return new Promise((resolve, reject) =>{
  setTimeout(()=>{
    resolve(13);
  }, 1000)
});
}

const system = () =>{
  console.log('init');
  getSomething().then(some=>{
    console.log(`Something is ${some}`);
  });
  console.log('end');
}

system();

