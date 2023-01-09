function capitaliza(str){
    let prima = str.charAt(0).toUpperCase();
    return prima.concat(str.substring(1));
}

console.log(capitaliza("luca bello"))