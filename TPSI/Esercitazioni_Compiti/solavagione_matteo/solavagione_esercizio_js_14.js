function sposta(vet, N, M) {
    let tmp_vet = vet.slice();
    let rimosso = tmp_vet.splice(N, 1)[0];
    tmp_vet.splice(M, 0, rimosso);
    return tmp_vet;
}

console.log(sposta([10, 20, 30, 40, 50], 0, 2))