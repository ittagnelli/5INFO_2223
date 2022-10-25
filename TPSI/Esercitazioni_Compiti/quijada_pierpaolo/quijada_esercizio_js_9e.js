let Risultato = function (ore, min, sec, ms){
    (this.ore = ore);
    (this.min = min);
    (this.sec = sec);
    (this.ms = ms);
}

let data1 = new Date(2022, 1, 20, 13, 40, 20, 10);
let data2 = new Date(2022, 1, 20, 3, 30, 10, 0);
let data3 = new Date(2022, 2, 28, 10, 20, 40, 50);
let data4 = new Date(2022, 2, 28, 8, 15, 0, 0);

calcolo_date(data1, data2);
console.log(calcolo_date(data1, data2));
console.log(calcolo_date(data1, data2));

function calcolo_date(data1, data2){
    let ms = data1.getMilliseconds() - data2.getMilliseconds();
    let sec = data1.getSeconds() - data2.getSeconds();
    let min = data1.getMinutes() - data2.getMinutes();
    let ore = data1.getHours() - data2.getHours();
    let risultato = new Risultato(ore, min, sec, ms);
    return risultato;
}