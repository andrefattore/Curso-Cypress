// const timeout = (duration) => {
//     return new Promise((resolve, reject) => {
//       resolve();
//       reject();
//     })
//   }

//   timeout(3000)
//     .then(function(){
//         console.log("Teste");
//     })
//     .catch(err => console.log(err.message))

const loginF = (login)=>{
    return new Promise((resolve,reject)=>{
        if(login == true){
            resolve("é noix");
        } else{
            reject("lucas diff");
        }
    });
}

var login = false;

loginF(login)
.then(function(texto){
    console.log(texto)
})
.catch(function(texto){
    console.log(texto)
})