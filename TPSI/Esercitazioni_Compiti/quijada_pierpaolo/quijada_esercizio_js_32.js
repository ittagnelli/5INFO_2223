function anagrammi(array){
    let ris = new Set();
    array.forEach(item => {
        item = item.split('').sort().join('');
        ris.add(item);
    });
    return ris;
}

let array = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione'];
console.log(anagrammi(array));