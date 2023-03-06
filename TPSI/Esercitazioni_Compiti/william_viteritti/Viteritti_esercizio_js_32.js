function no_anagramma(array){
    let ris = new Set();
    array.forEach(item => {
        item = item.split("").sort().join('');
        ris.add(item);
    })
    console.log(ris);



}


console.log(no_anagramma(['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione']));
