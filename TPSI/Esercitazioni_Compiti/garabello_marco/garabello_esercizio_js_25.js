function substitute_sub_array(array, M){
    let copy = [...array];
    copy.splice(0,0,...copy.splice(-M));

    return copy;
}

console.log(substitute_sub_array([1,2,3,4,5,6,7], 3));