function random(value){
    return Math.floor(Math.random()*value);
}

function crea(n){
    let array = Array(n).fill(0).map((item)=> item = random(10));
    let reversed = JSON.parse(JSON.stringify(array)).reverse();
    console.log(`array    : ${array}`);
    console.log(`invertito: ${reversed}`);
}

let N=3;
crea(N);