function caratteri_casuali() {
    let vettore = new Array(7);
    vettore.fill(0);
    let N = 0;

    vettore.forEach((item, idx) => {
        if(Math.floor(Math.random()*N))
            vettore[idx] = String.fromCharCode(Math.floor((Math.random()*10)) + 48);
        else
            vettore[idx] = String.fromCharCode((Math.floor(Math.random()*26)) + 97);
    })

    return vettore
    
}

console.log(caratteri_casuali());