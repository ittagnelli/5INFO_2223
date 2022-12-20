function riordina(array, M){
    let ris = [...array];
    ris.splice(0,0,...ris.splice(-M));

    return ris;
}

let array=[1,2,3,4,5,6,7];
let M=3;
console.log(riordina(array, M));