function operazione(n1,n2,callback){
    callback(n1,n2);
}

function somma(n1,n2){
   console.log(n1+n2);

}

function prodotto(n1,n2){
    console.log(n1*n2);
}

function potenza(n1,n2){
    console.log(n1**n2);
}


operazione(1,2,somma);
operazione(15,3,prodotto);
operazione(4,4,potenza);