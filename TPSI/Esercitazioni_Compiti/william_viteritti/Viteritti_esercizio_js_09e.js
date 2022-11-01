let Risultato = function(h,m,s,ms){
    this.h = h;
    this.m = m;
    this.s = s;
    this.ms = ms;
}

let day1 = new Date("2022", "11", "10", "24", "35", "49", "16");
let day2 = new Date("2022", "01", "25", "14", "20", "12", "10");
let day3 = new Date("2022", "06", "04", "23", "45", "29", "05");
let day4 = new Date("2022", "08", "07", "15", "10", "20", "02");

console.log(diff_g(day1, day2));
console.log(diff_g(day3, day4));

function diff_g (day1, day2){
    let h = day1.getHours() - day2.getHours();
    let m = day1.getMinutes() - day2.getMinutes();
    let s = day1.getSeconds() - day2.getSeconds();
    let ms = day1.getMilliseconds() - day2.getMilliseconds();
    let risultato = new Risultato(h,m,s,ms);
    return risultato;
}
