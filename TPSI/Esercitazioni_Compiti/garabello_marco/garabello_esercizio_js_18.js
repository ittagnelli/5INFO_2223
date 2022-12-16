function pow_times(array){
    return array.reduce((acc,curr) => acc * curr**2,1);
}

console.log(pow_times([1,2,3,4]))