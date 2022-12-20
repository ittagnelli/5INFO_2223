let First_array = [1,2,3,4,500];
let Second_array = [5,4,3,2,1];

/*function verifica(array1, array2) {
       array1.forEach((item, i)=> if(item == arrray2[i]) return true;
        else return false
}
console.log(verifica(array1,array2));*/


function compare_arrays(First_array, Second_array) {
    return First_array.map(item, i) => Second_array[i] === item).every(item => item => == true);
}

console.log(compare_arrays(First_array, Second_array));
