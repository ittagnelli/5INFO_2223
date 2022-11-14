function upper_case(str){
    let ret = str
    let sub;
    for(let letter in ret){
        sub = String.fromCharCode(ret.charCodeAt(letter)-32);
        ret = ret.replace(ret.charAt(letter),sub); 
    }
    return ret;
}

console.log(upper_case("test"));