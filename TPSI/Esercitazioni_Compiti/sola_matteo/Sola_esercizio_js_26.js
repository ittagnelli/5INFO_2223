function inverti_vettore(N) {
    let vettore = Array(N).fill(0).map((item) => item = Math.floor(Math.random()*50));

    console.log(vettore);

    let vettore_inverso = vettore.reverse();

    console.log(vettore_inverso);
}

console.log(inverti_vettore(10));