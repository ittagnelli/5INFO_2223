function create_array(array){
    for(let i =0; i<7; i++){
        if([i]%2==0){
           array[i] = String.fromCharCode(Math.floor((Math.random()*10)+48));
        }
        else{
            array[i] = String.fromCharCode(Math.floor((Math.random()*25)+97));
        }
    }
    return array;
}

let array = [];
console.log(create_array(array));