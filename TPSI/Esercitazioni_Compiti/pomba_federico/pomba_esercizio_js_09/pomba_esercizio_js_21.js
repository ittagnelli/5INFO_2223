let arr = [];
for (let i=0;i<100;i++){
    arr[i]=Math.floor(Math.random()*50);}
let N = 5

function numcas(arr,N){
let cp_arr = arr.slice();
for(let i=0;i<100;i++){
    if(cp_arr[i]%N==0)cp_arr[i]=0;
}
}

console.log(numcas(arr,N))