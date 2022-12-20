function random(value){
    return Math.floor(Math.random()*value);
}

function inverso(n){
    let array = Array(n).fill(0).map((item)=> item = random(10));
    let reversed = JSON.parse(JSON.stringify(array)).reverse();
    console.log(`array    : ${array}`);
    console.log(`invertito: ${reversed}`);
}

inverso(5);