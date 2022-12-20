let array = [];
let N = 2;


function a(array, N){
    for(let i=0; i<array.length; i++){
        if(array[i]%N == 0){  
            array[i] = 0;
        }
    }
    return array;
}

for(let i=0; i<100; i++){
    array[i] = Math.floor(Math.random()*50);
        }

console.log(a(array,N));