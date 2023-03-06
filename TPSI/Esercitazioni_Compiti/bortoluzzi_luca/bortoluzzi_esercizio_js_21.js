let arr = [];
for(let i = 0; i < 100; i++) {
    arr[i] = Math.floor(Math.random()* 50);
}

let n = 2;
console.log(arr);
console.log(soluzione(arr, n));

function soluzione(arr, n){
    let cp_arr = arr.slice();
    for(let i = 0; i < 100; i++) {
        if(cp_arr[i] % n == 0) cp_arr[i] = 0;
    }
    return cp_arr;
}