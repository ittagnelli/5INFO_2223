function fibonacci(n) {   //funzione Fibonacci
    if (n <= 0) {
        return console.log("Invalid input: n must be a positive integer");
    }
    if (n === 1 || n === 2) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Esempi
  console.log(fibonacci(1)); 
  console.log(fibonacci(2)); 
  console.log(fibonacci(7)); 
  console.log(fibonacci(10)); 
  console.log(fibonacci(20));