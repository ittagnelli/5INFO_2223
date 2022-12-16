function get_random(){
    return Math.ceil(1 + (Math.random()*50))
}

function rem_mult(array, N){
    let copy = [...array];
    return copy.map(item => item = (item%N? get_random() : 0));
}

let array = Array(100).fill(0).map(item => item = get_random());
console.log(array)
console.log(rem_mult(array,5));