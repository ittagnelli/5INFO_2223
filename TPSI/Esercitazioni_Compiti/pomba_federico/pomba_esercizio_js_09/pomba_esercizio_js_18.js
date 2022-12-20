let arr = [1,2,3,4,5,69];

function rest(arr){

let prodotto = arr.reduce((c, actual)=>c*(actual*actual), 1);
return prodotto;

}

console.log(rest(arr));