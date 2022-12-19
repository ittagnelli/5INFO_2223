let vettore = [1, 4, 7, 3, 11, 12, 20]


function ordina(vettore){
    return vettore.sort((a,b)=>{
        if(primo(a) && !primo(b)) return -1;
        if(primo(a) && primo(b)) return 0;
        if(!primo(a) && primo(b)) return 1;
    })
}
function primo(value){
    let isPrime = true;
    if (value === 1) {
        isPrime = false;
    }
    else if (value > 1) {
        for (let i = 2; i < value; i++) {
            if (value % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
console.log(ordina(vettore))