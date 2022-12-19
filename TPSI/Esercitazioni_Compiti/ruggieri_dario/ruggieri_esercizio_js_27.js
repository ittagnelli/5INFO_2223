let array = [1,2,2,3,3,4,5,5,6,6,1];

function rimouvi_duplicati(array){
    return array.filter((item,idx) => array.indexOf(item) === idx);
}

console.log(rimouvi_duplicati(array));