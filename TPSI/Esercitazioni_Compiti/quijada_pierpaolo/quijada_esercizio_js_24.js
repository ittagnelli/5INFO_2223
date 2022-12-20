function crea(array){
    for(let i=0; i<7; i++)
        i%2==0 ? array[i] = String.fromCharCode(Math.floor((Math.random()*10)+ 48)) : String.fromCharCode(Math.floor((Math.random()*26)+97));
    return array;
}

let array = [];
console.log(crea(array));
