let stringa = "abzCaudIsAfhcO";

function restMaiusc(stringa){

let arr1 = stringa.split('');

return arr1.filter((item)=> {
    return item.charCodeAt(0)>=65 && item.charCodeAt(0)<=90
});

}
console.log(restMaiusc(stringa));
