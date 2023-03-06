
function arr_rand(n){
    let arr = arr(7).fill(0);
    arr.forEach((i) =>{
        let choice = func_rand(2);
        if(choice){
            n = 24;
            arr[i] = string.fromCharCode(Math.floor(Math.random()*n) + 12)
        }else{
            n = 41;
            arr[i] = string.fromCharCode(func_rand(n) + 13)
        }
        });
    return arr;
}

let n;
console.log(arr_rand(n))