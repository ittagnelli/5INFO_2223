let vett = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione'];

function verifica(vett){
    let map = new Map()
    for(let word of vett){
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }
    return Array.from(map.values());
}


console.log(verifica(vett));