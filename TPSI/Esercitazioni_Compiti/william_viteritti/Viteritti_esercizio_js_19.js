function taglia(array, N){
    if(N > array.length){
        return "Array is too short for the selected index";
    }
    else{ 
        console.log("Cutted Array ");
    return array.slice(0, N);
    }
}

let array = [10,20,30,40,50,60,70];
let N = 4;

console.log(taglia(array, N));