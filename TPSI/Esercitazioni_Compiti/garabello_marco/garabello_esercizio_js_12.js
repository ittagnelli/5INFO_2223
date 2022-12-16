function compare(array1, array2){
    return array1.map((item, index) => item == array2[index]).every(item => item == true)
}


console.log(compare([1,2,3,3,4], [1,2,3]));