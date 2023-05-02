const promise = new Promise((resolve, rejected)=>{
   const isFullfilled = Math.random() > 0.3;
    if(isFullfilled){
        resolve('Solving is approved')
    } else {
        rejected('Solving with a problem')
    }
});
console.log(promise)