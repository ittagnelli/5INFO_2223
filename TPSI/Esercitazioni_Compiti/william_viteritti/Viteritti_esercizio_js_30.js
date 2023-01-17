function rest(mappa){
    let r = Array.from(new Set(mappa));
    return r;
}

let mappa = ['rosso','rosso',1,2,1];
console.log(rest(mappa));