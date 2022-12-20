function binary(string){

    let array = string.split("");
    
    return array.reverse().reduce((acc,curr,index) => acc+=+curr*(2**index),0);
}

console.log(binary("10"));


