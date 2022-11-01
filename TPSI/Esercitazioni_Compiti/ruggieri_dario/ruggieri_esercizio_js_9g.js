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

function minore(data1, data2, data3){
    let data_1 = new Date(2022, 10, 10, data1.h, data1.m, data1.s, 0 );
    let data_2 = new Date(2022, 10, 10, data2.h, data2.m, data2.s, 0 );
    let data_3 = new Date(2022, 10, 10, data3.h, data3.m, data3.s, 0 );
    if(data_1 < data_2){
        if(data_1 < data_3){
            return data_1
        }
        else{
            return data_3;
        }
    }
    if(data_2 < data_3){
        return data_2;
    }
    else{
        return data_3;
    }
}

console.log(`La data minore è: ${minore(data1, data2, data3)}`);