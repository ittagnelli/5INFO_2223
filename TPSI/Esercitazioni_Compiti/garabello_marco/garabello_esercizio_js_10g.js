function invert_case(str){
    let ret = str;
    let flag;
    let code;
    for(letter in ret){
        code = ret.charCodeAt(letter);
        if(code > 96 && code < 123)
            flag = 0
        else if(code > 64 && code < 91)
            flag = 1;
        else
            flag = 2
        
        switch(flag){
            case 0:
                ret = ret.replace(ret.charAt(letter),ret.charAt(letter).toUpperCase());
                break;
            case 1:
                ret = ret.replace(ret.charAt(letter),ret.charAt(letter).toLowerCase());
            default:
                continue;
        }
    }
    return ret;
}

console.log(invert_case("Ciao Mondo!!!"));