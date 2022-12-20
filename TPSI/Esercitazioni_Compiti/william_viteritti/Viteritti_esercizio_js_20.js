function selected(array, N){
    if(N > array.length){
        return "Array too short for the selected index";
    }
    else{
        return array.slice(array.length - N);
    }
}

let array = [10,20,30,40,50,60,70,80,90,100,101];
let N = 4;
console.log(selected(array, N));