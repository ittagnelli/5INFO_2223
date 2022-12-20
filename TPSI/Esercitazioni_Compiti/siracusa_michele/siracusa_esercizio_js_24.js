function random_characters() {

    let vector = new Array(7);
    vector.fill(0);

    let N = 0;

    vector.forEach((item, idx) => {

        if(Math.floor(Math.random()*N))
            vector[idx] = String.fromCharCode(Math.floor((Math.random()*10)) + 48);
        else
            vector[idx] = String.fromCharCode((Math.floor(Math.random()*26)) + 97);
    })

    return vector
    
}

console.log(random_characters());



