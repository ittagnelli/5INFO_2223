function compare(arr1, arr2){
    return arr1.map((item, index) => item == arr2[index]).every(item => item == true)
}
console.log(compare([1,2,3], [1,2,3,3,4]));