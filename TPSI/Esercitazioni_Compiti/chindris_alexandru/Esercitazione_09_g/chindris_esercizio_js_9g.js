function select(n1,n2,n3){
    let min;
    n1 < n2 ? n1 < n3 ? min=n1 : min=n3 : n2 < n3 ? min=n2 : min=n3;
    /* return Math.min(n1, n2, n3); Alternativa più veloce */
    return min; 
}

let time01 = {
    HH : 5,
    MM : 34,
    SS : 50
}

let time02 = {
    HH : 23,
    MM : 13,
    SS : 45
}

let time03 = {
    HH : 21,
    MM : 7,
    SS : 33
}

//MAIN
console.log(`Minore dei tre orari(1): ${select(time01.HH, time02.HH, time03.HH)}`);
console.log(`Minore dei tre orari (2): ${select(time01.HH =3, time02.HH=6, time03.HH=9)}`);