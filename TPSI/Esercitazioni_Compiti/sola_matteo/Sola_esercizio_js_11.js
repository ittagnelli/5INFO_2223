function numeriInversi(){
    let new_array = [];
    let numeri = [1, 3, 5, 7, 9, 11].forEach(item => new_array.unshift(item));

    console.log(numeri);
}

console.log(`Il nuovo array invertito è: ${numeriInversi}`);