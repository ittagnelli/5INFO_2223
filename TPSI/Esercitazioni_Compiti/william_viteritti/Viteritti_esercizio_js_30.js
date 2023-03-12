function tra_valori(Arr,N,M){

    let a = Arr.filter((value) => value >= N && value <= M);
    return a;
}

let N = 3;
let M = 10;
let Arr = [1,2,3,4,5,6,7,8,9,0];
console.log(tra_valori(Arr,N,M));