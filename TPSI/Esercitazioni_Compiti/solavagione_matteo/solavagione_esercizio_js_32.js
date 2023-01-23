
let words = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione']

function anagramma(arr) {
    let mappa = new Map();
    for (let parola of arr) {
      let sorted = parola.toLowerCase().split('').sort().join('');
      mappa.set(sorted, parola);

    }
  
    return Array.from(mappa.values());
  }
   
console.log(anagramma(words));
  
