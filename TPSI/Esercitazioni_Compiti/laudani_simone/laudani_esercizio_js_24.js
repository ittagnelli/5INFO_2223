function func_rand(N){
    return Math.floor(Math.random()*N)
}

function array_rand(){
    let arr = arr(7).fill(0);
    arr.forEach((i) =>{
        let choice = func_rand(2);
        if(choice)
            arr[i] = string.fromCharCode(func_rand(23) + 12)
        else
            arr[i] = string.fromCharCode(func_rand(41) + 13)
    });
    return arr;
}

console.log(array_rand())