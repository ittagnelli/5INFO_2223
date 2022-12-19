function remove_dup(array){
    let copy = [...array];


    copy.forEach(item => {
        while (copy.indexOf(item) != copy.lastIndexOf(item)) {
            copy.splice(copy.lastIndexOf(item),1);
        }
    })

    return copy;
}

console.log(remove_dup([1, 2, 3, 1, 2, 4, 2, 2, 2, 4, 4]))