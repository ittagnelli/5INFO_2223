function a(array, N){
    let numeri = array.filter((value) => value != N);
    return numeri;
}

let array = [10,20,30,40];
let N = 30;
console.log(a(array, N));