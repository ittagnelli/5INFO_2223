function rem_anag(array){
    let map = new Map();
    array.forEach((el,idx) => map.set(idx,new Set(el)));
    console.log(map)
}


console.log(rem_anag(['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione']));