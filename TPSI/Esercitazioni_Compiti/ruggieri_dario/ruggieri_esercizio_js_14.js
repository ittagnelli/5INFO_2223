function add(vettore, N, M){
    let value = vettore.splice(N,1);
    vettore.splice(M,0,value[0]);
    return vettore ;
}
let vettore = [10,20,30,40,50];

console.log(add(vettore, 0,2));

