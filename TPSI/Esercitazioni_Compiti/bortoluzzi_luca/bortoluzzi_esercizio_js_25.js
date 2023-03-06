function riordina(arr, M){
    let ris = [...arr];
    ris.splice(0,0,...ris.splice(-M));

    return ris;
}

let arr=[1,2,3,4,5,6,7];
let M = 3;
console.log(riordina(arr, M));