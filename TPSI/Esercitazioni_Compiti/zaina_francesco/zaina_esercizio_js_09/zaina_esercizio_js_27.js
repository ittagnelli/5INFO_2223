let array = [1,2,3,4,5,6];

function rimouvi_duplicati(array){
    return array.filter((item,idx) => array.indexOf(item) === idx);
}

console.log(rimouvi_duplicati(array));