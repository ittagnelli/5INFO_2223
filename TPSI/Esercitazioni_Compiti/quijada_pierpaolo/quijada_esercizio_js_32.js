function anagrammi(array){
    for(let i=0; i<array.length; i++){
        array[i] = array[i].split('').sort().join('');
    }
    
    return new Set(array);
}

let array = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione'];
console.log(anagrammi(array));