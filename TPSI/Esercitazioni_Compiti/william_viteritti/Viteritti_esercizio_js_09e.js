let day1 = {
    h:12,
    m:30,
    s:05
}

let day2 = {
    h:23,
    m:40,
    s:10
}

let day3 = {
    h:12,
    m:35,
    s:23
}

let day4 = {
    h:16,
    m:23,
    s:00
}

let risultato;

function differenza_giorni(day1,day2){
    let g1 = new Date(2022, 12, 12, day1.h, day1.m, day1.s, 0);
    let g2 = new Date(2022, 12, 12, day2.h, day2.m, day2.s, 0);


    return risultato = {
        diff_h: ((g2-g1)/(60*60*1000)),
        diff_m:((g2-g1)/(60*1000)),
        diff_s:((g2-g1)/(1000)),
        diff_ms:(g2-g1)
    }
}

risultato = differenza_giorni(day1, day2);
console.log(`La differenza tra day1 e day2 in ms è di ${risultato.diff_ms}, in secondi è di ${risultato.diff_s}, la differenza in minuti è di: ${risultato.diff_m} ed in ore è di ${risultato.diff_h}`);

risultato = differenza_giorni(day3, day4);
console.log(`La differenza tra day3 e day4 in ms è di ${risultato.diff_ms}, in secondi è di ${risultato.diff_s}, la differenza in minuti è di: ${risultato.diff_m} ed in ore è di ${risultato.diff_h}`);