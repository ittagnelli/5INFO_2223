let stringa = "0001111"
function decimal(str) {
    return str.split(``).reverse().reduce((acc, curr, idx) => acc = acc+(curr*2**idx), 0)
}
console.log(decimal(stringa));
