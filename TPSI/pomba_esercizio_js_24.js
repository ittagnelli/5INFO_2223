function caratteri_casuali() {
    let vett = new Array(7);
    vett.fill(0);
    let N = 0;

    vett.forEach((item, idx) => {
        if(Math.floor(Math.random()*N))

    vett[idx] = String.fromCharCode(Math.floor((Math.random()*10)) + 48);
        else
        
    vett[idx] = String.fromCharCode((Math.floor(Math.random()*26)) + 97);
    })
    return vett
}

console.log(caratteri_casuali());