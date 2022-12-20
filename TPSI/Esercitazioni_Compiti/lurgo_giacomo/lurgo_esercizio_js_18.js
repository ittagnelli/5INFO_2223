let array = [1,2,3,4,5,6]

function product (array) {
    return array.reduce((tmp, actual) => tmp*(actual*actual), 1)
}
console.log(product(array));