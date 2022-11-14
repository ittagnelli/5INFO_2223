function capitalize_all(str){
    let splitted = str.split(' ');
    let ret = "";
    for(let i = 0; i<splitted.length; i++){
        ret = ret.concat(splitted[i].replace(splitted[i].charAt(0),splitted[i].charAt(0).toUpperCase()), " ");
    }
    return ret;
}
console.log(capitalize_all("ciamo mondo la terra gira!!!"));