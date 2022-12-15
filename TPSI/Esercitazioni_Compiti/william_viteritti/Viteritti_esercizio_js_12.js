function verifica(array, array2){
    if(array.length == array2.length){
        let variabile = 0; //numero_di_celle_che_si_somigliano

        for(let i = 0; i<array.length; i++){
            if(array[i] == array2[i])
                variabile++;
            else
                variabile = variabile;
        }
        if(variabile == array.length)
            return true;

        else
            return false;
        
    }
    else
        return false;
}

let array = [10,20,30,40];
let array2 = [10,20,30,50];
console.log(verifica(array, array2));
