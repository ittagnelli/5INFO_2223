function date_difference (obj1,obj2){
    let date1 = new Date(1,1,1,obj1.h,obj1.m,obj1.s);
    let date2 = new Date(1,1,1,obj2.h,obj2.m,obj2.s);

    let difference = date2 - date1;

    return {
        ms: difference,
        s: difference/1000,
        m: difference/(1000*60),
        h: difference/(60*60*1000)
    }
}

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
    h: 15,
    m: 16,
    s: 36
}
let diff1 = date_difference(date1,date2);
let diff2 = date_difference(date3,date4);
console.log(`differenza 1:\nms: ${diff1.ms}\ns: ${diff1.s}\nm: ${diff1.m}\nh: ${diff1.h}\n`);
console.log(`differenza 2:\nms: ${diff2.ms}\ns: ${diff2.s}\nm: ${diff2.m}\nh: ${diff2.h}\n`);