let somma = (n1,n2) => {
    return +n1 + +n2;
}

let diff = (n1,n2) => {
    return +n1 - (+n2);
}

let prodotto = (n1,n2) => {
    return +n1 * +n2;
}

let div = (n1,n2) => {
    return +n1 / +n2;
}

console.log(somma(1,2))
console.log(somma('15','5'), "\n")
console.log(diff(5,3))
console.log(diff('20','17'), "\n")
console.log(prodotto(true, false))
console.log(prodotto(12,4), "\n")
console.log(div(64,8))
console.log(div('121','11'), "\n")


