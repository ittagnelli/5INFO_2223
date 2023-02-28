function rimozione(array){
    return new Set(array);
}

let array = [1,2,3,4,5,6,1,2,3];
console.log(rimozione(array));