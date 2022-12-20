function func(array, M){
    let dupe = [...array];
    dupe.splice(0,0,...dupe.splice(-M));

    return dupe;
}

console.log(func([1,2,3,4,5], 3));