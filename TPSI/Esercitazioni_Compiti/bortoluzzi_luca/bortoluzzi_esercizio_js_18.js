
function calcolo(arr){
return arr.reduce((acc, current) => acc * Math.pow(current, 2), 1);
}

let arr = [1,2,3];
console.log(calcolo(arr));