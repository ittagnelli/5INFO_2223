function a (stringa){
    let str = stringa.split('');
    let r = str.reverse();
    let ris=0;
    
    for(let i = 0; i<stringa.length; i++)
        {
            if(r[i] == '1'){
                ris = ris + Math.pow(2,i);
            }
        }
    return ris
}

let stringa = "11100";
console.log(a(stringa));