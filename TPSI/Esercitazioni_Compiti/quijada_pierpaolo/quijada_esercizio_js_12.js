function controllo (array1, array2) {
    let cont=0;
    if(array1.length == array2.length){
        for(let i=0; i<array1.length; i++)
            array1[i] == array2[i] ? cont++ : cont = cont;
        return cont == array1.length ? true : false;
    }
    else return false;
}

let array1 = [1,2,3];
let array2 = [1,2,3];
console.log(controllo(array1, array2));