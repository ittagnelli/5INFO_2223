function get_random(N){
    return Math.floor(Math.random()*N);
}

function random_array(){
    let arr = Array(7).fill(0);
    arr.forEach((item,idx) =>{
        if(get_random(2) == 1)
             arr[idx] = String.fromCharCode(get_random(26)+ 97);
        else
            arr[idx] = String.fromCharCode(get_random(10)+ 48);
    })
    return arr;
}

console.log(random_array())