let data1 = new Date(2022, 8, 14, 17, 30, 20, 10);
let data2 = new Date(2018, 3, 1, 15, 15, 5, 2);
let data3 = new Date(2019, 5, 6, 12, 5, 2, 1);
let data4 = new Date(2016, 2, 4, 9, 0, 0, 0);

function calcola_orario(ora1, ora2){
    return {
        ms: ora1 - ora2,
        s: (ora1 - ora2) / 1000,
        m: (ora1 - ora2) / 60*1000,
        h: (ora1 - ora2) / 60*60*1000,
    }      
}

console.log(calcola_orario(data1, data2));
console.log(calcola_orario(data3, data4));
