function minor(obj1,obj2,obj3){
    let date1 = new Date(1,1,1,obj1.h,obj1.m,obj1.s);
    let date2 = new Date(1,1,1,obj2.h,obj2.m,obj2.s);
    let date3 = new Date(1,1,1,obj3.h,obj3.m,obj3.s);

    if (date1<date2 && date1< date3) return obj1;
    if (date2<date1 && date2<date3) return obj2;
    return obj3}
let date1 = {
    h: 10,
    m: 15,
    s: 30
}
let date2 = {
    h: 11,
    m: 15,
    s: 30
}
let date3 = {
    h: 13,
    m: 30,
    s: 30
}
let date4 = {
    h: 12,
    m: 15,
    s: 30
}
let date5 = {
    h: 18,
    m: 14,
    s: 30
}
let date6 = {
    h: 4,
    m: 20,
    s: 50
}
let min1 = minor(date1,date2,date3);
let min2 = minor(date4,date5,date6);
console.log(`il minimo 1:\ns: ${min1.s}\nm ${min1.m}\nh: ${min1.h}\n`);
console.log(`il minimo 2:\ns: ${min2.s}\nm ${min2.m}\nh: ${min2.h}\n`);