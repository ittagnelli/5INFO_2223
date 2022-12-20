// Array al contrario senza metodo reverse
function reorder (arr) {
        return arr.sort((l1, l2) => arr.indexOf(l2)- arr.indexOf(l1))
}

let array = [1,2,3];

console.log(reorder(array));