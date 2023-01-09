function crea(array){

    for(let i=0; i<5; i++){
       array[i] = Math.floor((Math.random()*10)+48);
    }
    
    return array.reverse();
}

let array = [];
console.log(crea(array));