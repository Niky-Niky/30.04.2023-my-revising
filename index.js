// const timerId = setTimeout(callback, delay, arg1, arg2);

const printMessage = function (message) {
    console.log(message);
  };
  
  const higherOrderFunction = function (callback) {
    const string = 'HOCs are awesome';
    callback(string);
  };
  
  higherOrderFunction(printMessage);
  

  function sayHello() {
    console.log('Hello!');
  }
  
  const timerId = setTimeout(sayHello, 5000);
  
  clearTimeout(timerId);
  