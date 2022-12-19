function remove(arr){
    let copia = [...arr];

    copia.forEach(item => {
        while (copia.indexOf(item) != copia.lastIndexOf(item)) {
            copia.splice(copia.lastIndexOf(item),1);
        }
    })
    return copia;
}

console.log(remove([1, 2, 1, 2, 2, 2, 2, 3, 3]))