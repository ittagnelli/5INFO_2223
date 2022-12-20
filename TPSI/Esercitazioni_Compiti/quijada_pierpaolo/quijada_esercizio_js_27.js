function rimozione(arr){
    let ris = [...arr];

    ris.forEach(item => {
        while (ris.indexOf(item) != ris.lastIndexOf(item)) {
            ris.splice(ris.lastIndexOf(item),1);
        }
    })
    return ris;
}

let array=[1,2,3,4,5,6,1,2,3];
console.log(rimozione(array))