function insert(str, news, pos){
    let first_half = str.slice(0, pos+1);
    let second_half = str.slice(pos);
    let ret = "";
    return ret.concat(first_half, news, second_half);
}


console.log(insert("Facciamo tanti esercizi che ci fanno bene", "JavaScript", 23));