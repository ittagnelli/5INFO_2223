function riordina(array){
    let array2 = [];
    let cont = 0;
    for(let i=0; i<array.length; i++){
        for (let j = 2; j < array[i]; j++) {
            if (array[i] % j == 0) {
                if(array2[cont-1] == array[i]){;}
                else{
                    array2[cont] = array[i];
                    cont++; 
                }
            }
        }
    }

    for(let i = 0; i <array.length; i++){
        for(let j=0; j<array2.length; j++){
            if(array[i] == array2[j]){
                array.splice(array.indexOf(array2[j]), 1);
            }
        } 
    }

    for(let i=0; i<array2.length; i++){
        array.push(array2[i]);
    }
    
    return array;
}

let array = [1,2,3,4,5,6,7,8];
console.log(riordina(array));
