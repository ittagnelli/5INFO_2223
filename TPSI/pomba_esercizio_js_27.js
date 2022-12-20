
function remove(arr){
   
    return arr.filter((item,index) => arr.indexOf(item) === index)

}

console.log(remove([1,2,2,3,3,4,5,5,6,6,1]));