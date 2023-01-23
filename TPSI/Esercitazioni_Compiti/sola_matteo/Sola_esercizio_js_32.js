function elimina_anagrammi(array){
    let mappa = new Map();

    for(let elemento of array){
      let new_vet = elemento.toLowerCase().split('').sort().join('');
      mappa.set(new_vet, elemento);
    }
  
    return Array.from(mappa.values());
}

let vettore = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione'];

console.log(elimina_anagrammi(vettore));