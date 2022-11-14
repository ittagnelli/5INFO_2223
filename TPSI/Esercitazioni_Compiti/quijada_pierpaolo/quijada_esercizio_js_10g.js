function invert_case(str){
    let str2 = str.split('');
    let str3 = "";

    for(let i=0; i<str.length; i++){
        if(str.charCodeAt(i)>65 && str.charCodeAt(i)<97)
            str2[i] = String.fromCharCode(str.charCodeAt(i)+32);
        if(str.charCodeAt(i)>97 && str.charCodeAt(i)<122){
            str2[i] = String.fromCharCode(str.charCodeAt(i)-32);
        }   
    }

    for(let j=0; j<str2.length; j++)
        str3 = str3.concat(str2[j]);
    
    return str3;
}

console.log(invert_case("nEl CiElO"));