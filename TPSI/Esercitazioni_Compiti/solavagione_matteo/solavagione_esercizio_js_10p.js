function tronca_parola(str, N){ 
    return str.split(' ').slice(0,N).join(' ')
}

console.log(tronca_parola("Mi piace giocare a calcio e basket", 5))