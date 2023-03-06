function generateUniqueRandomNumbers(N, M) {
    if (M < N) {
      throw new Error('M deve essere maggiore o uguale a N');
    }
    const uniqueNumbers = [];
    while (uniqueNumbers.length < N) {
      const randomNum = Math.floor(Math.random() * M) + 1;
      if (!uniqueNumbers.includes(randomNum)) {
        uniqueNumbers.push(randomNum);
      }
    }
    return uniqueNumbers.sort((a, b) => b - a);
  }
  
  const N = 3;
  const M = 100;
  const output = generateUniqueRandomNumbers(N, M);
  console.log(output); 
  

  