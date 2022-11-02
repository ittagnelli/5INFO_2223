let result = function (ore, min, sec, ms){
    (this.ore = ore);
    (this.min = min);
    (this.sec = sec);
    (this.ms = ms);
}

let date1 = new Date(2022, 1, 20, 13, 40, 20, 10);
let date2 = new Date(2022, 1, 20, 3, 30, 10, 0);
let date3 = new Date(2022, 2, 28, 10, 20, 40, 50);
let date4 = new Date(2022, 2, 28, 8, 15, 0, 0);

calcolo_date(date1, date2);
console.log(calcolo_date(date1, date2));
console.log(calcolo_date(date1, date2));

function calcolo_date(date1, date2){
    let ms = date1.getMilliseconds() - date2.getMilliseconds();
    let sec = date1.getSeconds() - date2.getSeconds();
    let min = date1.getMinutes() - date2.getMinutes();
    let ore = date1.getHours() - date2.getHours();
    let res = new result(ore, min, sec, ms);
    return res;
}