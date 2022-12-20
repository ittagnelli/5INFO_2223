let array = [10,20,30,40,50];
let N = 0;
let M = 4;
console.log(ordina(array, N, M));

function ordina(array, N, M){
    if(M<array.length){
        let valore = array[M];
        array[M] = array[N];
        for(let i=0; i<M; i++){
            array[i] = array[i+1];  //assegno alla cella 0 il valore della cella successiva
            if((i+1)==M)
                array[i] = valore;
        }
        return array;
    }
    return ("M troppo grande");
}