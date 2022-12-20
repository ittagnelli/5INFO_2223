function get_random(value){
    return Math.floor(Math.random()*value);
}

function inverti(N){
    let array = Array(N).fill(0).map((item)=> item = get_random(10));
    let reversed = [...array].reverse();
    console.log("array: " + array);
    console.log("reverse: " + reversed);
}

inverti(5);