/* const promise = new Promise((resolve, rejected)=>{
    const isFullfilled = Math.random() > 0.3;
     if(isFullfilled){
         resolve('Solving is approved')
     } else {
         rejected('Solving with a problem')
     }
 });
 console.log(promise)
 /* 
 if resolve - 'Solving is approved'
 if rejected - 'Solving with a problem'
 */  

fetch('https://pokeapi.co/api/v2/pokemon/5')
.then(response=>response.json())
.then(pokemon => console.log(pokemon));