function res(words) {
  let result = [];
  let parole = words.map(word => word.split('').sort().join(''));
  for (let i = 0; i < words.length; i++) {
      if (parole.indexOf(parole[i]) === i) {
          result.push(words[i]);
      }
  }
  return result;
}

//MAIN
let parole = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione'];
console.log(res(parole));