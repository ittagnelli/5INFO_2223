let data1 = {
    h: 11,
    m: 8,
    s: 11
}
let data2 = {
    h: 12,
    m: 8,
    s: 11
}//Si presume che data2 sia più grande della data1

let data3 = {
    h: 11,
    m: 55,
    s: 34
}
let data4 = {
    h: 14,
    m: 18,
    s: 45
}//Si presume che data4 sia più grande della data3
let risultato;

function differenza(data1, data2){
    let data_inizio = new Date(2022, 10, 10, data1.h, data1.m, data1.s, 0 );
    let data_fine = new Date(2022, 10, 10, data2.h, data2.m, data2.s, 0 );
    return risultato = {
        diff_ms: (data_fine - data_inizio),
        diff_s: (data_fine - data_inizio)/(1000),
        diff_m: ((data_fine - data_inizio)/(1000*60)),
        diff_o: ((data_fine - data_inizio)/(1000*60*60))
    }
}

risultato = differenza(data1, data2);
console.log(`La differenza tra data2 e data1 in ms: ${risultato.diff_ms}, in s ${risultato.diff_s}, in minuti: ${risultato.diff_m}, in ore: ${risultato.diff_o}`);

risultato = differenza(data3, data4);
console.log(`La differenza tra data4 e data3 in ms: ${risultato.diff_ms}, in s ${risultato.diff_s}, in minuti: ${risultato.diff_m}, in ore: ${risultato.diff_o}`);