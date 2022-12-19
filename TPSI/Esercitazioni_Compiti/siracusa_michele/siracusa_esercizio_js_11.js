function invert (N){
    let save_lenght = N.length;
    let array2 = Array(save_lenght);
    for(let i = 0; i< N.length; i++){
        save_lenght--;
        array2[i] = N[save_lenght];
    }
    return array2;
}

let N = [1,2,3];
console.log(invert(N));



