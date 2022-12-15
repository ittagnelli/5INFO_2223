function a(N,M,array){
    if(M<array.length){
        let salva_cella = array[M];
        array[M] = array[N];
        for(let i = 0; i<M; i++){
            array[i] = array[i+1];
            if((i+1)==M){
                array[i] = salva_cella;
            }
        }
        return array;
    }
    else
        return ("M è troppo grande");
}

let N = 0;//i=1
let M = 2;
let array = [10,20,30,40];
//20 10 10 40
//20 30 10 40
console.log(a(N,M,array));