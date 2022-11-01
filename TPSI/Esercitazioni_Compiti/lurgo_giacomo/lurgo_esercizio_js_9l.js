let num1 = 2;
let num2 = 5;

    print(callback);

function print(callback) {
    let media  = callback();
    let prodotto = callback2();
    let potenza = callback3();
    console.log(`La media vale ${media}`);
    console.log(`Il prodotto vale ${potenza}`);
    console.log(`La potenza vale  ${potenza}`);
}

function callback (num1, num2){
    //console.log(`1`);
    return (num1 + num2);
}
function callback2 (num1, num2){
    //console.log(`2`);
    return (num1 * num2);
}

function callback3 (num1, num2){
    //console.log(`3`);
    return (Math.pow(num1, num2));
}

