function remove(array){
    return array.filter((item,index) => array.indexOf(item) === index);
}

console.log(remove([1,2,2,3,3,4,5,5,6,6,1]));