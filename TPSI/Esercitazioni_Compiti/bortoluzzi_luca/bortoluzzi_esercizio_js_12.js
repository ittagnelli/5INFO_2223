let stringa1 = [1,2,34,4];
let stringa2 = [1,2,3,4];

console.log(confronta(stringa1, stringa2));

function confronta(stringa1, stringa2) {

    for(let i = 0; i < stringa1.length; i++){
         if(stringa1[i] != stringa2[i]) return false; 
    }

    return true;
}
