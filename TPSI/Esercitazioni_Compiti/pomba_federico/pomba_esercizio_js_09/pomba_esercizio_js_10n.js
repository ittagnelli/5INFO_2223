function insert(str1, str2, n){
    let str3 = str1.slice(0, n+1);


    let str4 = str1.slice(n+1);
    return str3.concat(str2 , " ", str4);
}

console.log(insert("ciaooo", "sono", 20));
