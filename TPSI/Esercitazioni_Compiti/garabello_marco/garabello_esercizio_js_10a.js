function abbreviazione(str){
    let indexofspace = str.indexOf(' ');
    let ret = str.replace((str.slice(indexofspace+1)), `${str.charAt(indexofspace+1).toUpperCase()}.`);
    ret = ret.replace(str.charAt(0), str.charAt(0).toUpperCase());
    return ret;
}


console.log(abbreviazione("marco garabello"));