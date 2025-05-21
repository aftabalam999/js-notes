// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Async is working")
//     }, 1000);
// })
// promiseOne.then(function(resolve){
//     console.log(resolve);
// })

// const promiseTwo = new Promise(function(resolve, reject){
//    setTimeout( function(){
//      let error = true;
//     if(!error){
//         resolve({username : "jasin999", password : 123})
//     }else{
//         reject("ERROR : Something went wrong.");
//     }
//    }, 1000)
// })

// promiseTwo.then(function(resolve){
//     console.log(resolve);
    
// }).catch(function(error){
//     console.log(error);
    
// })

// Async Await

const promiseThree = new Promise(function(resolve, reject){ // in this promise we are handling error
   setTimeout( function(){
     let error = true;
    if(!error){
        resolve({username : "javascript", password : 123})
    }else{
        reject("ERROR : JS went wrong.");
    }
   }, 1000)
})

// async function consumePromiseThree() {
    
//    try {
//     const response = await promiseThree
//     console.log(response);
    
//    } catch (error) {
//     console.log(error);
    
//    } 
// }
// consumePromiseThree();

// promiseThree.then(function(resolve){
//     console.log(resolve);
    
// }).catch((error) => console.log(error));



/********** Fetch ************/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => (console.log(data)))
.catch((error) => console.log(error));

