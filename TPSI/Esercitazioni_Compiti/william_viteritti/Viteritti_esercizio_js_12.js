function controllo_valore(numeri, nummeri2){
    if(numeri.length == numeri2.length){
        let v = 0;
        for(let i=0; i<numeri.length;i++){
            if(numeri[i] == numeri2[i])
                v++;
            else
                v = v;
        }
        if(numeri.length == v){
            return true
        }
        else{
            return false;
        }
    }else{
        return false;
    }
}

let numeri = [1,2,3,4,5];
let numeri2 = [1,2,3,4,5,6,7];

console.log(controllo_valore(numeri, numeri2));