let data1 = new Date(2022, 1, 20, 13, 40, 20, 10);
let data2 = new Date(2022, 1, 20, 3, 30, 10, 0);
let data3 = new Date(2022, 2, 28, 10, 20, 40, 50);

let data4 = new Date(2022, 3, 20, 13, 40, 20, 10);
let data5 = new Date(2022, 3, 20, 3, 30, 10, 0);
let data6 = new Date(2022, 4, 28, 10, 20, 40, 50);

console.log(control(data1, data2, data3));
console.log(control(data4, data5, data6));

function control (data1, data2, data3) {
    let min;
    data1 < data2 ? data1 < data3 ? min=data1 : min=data3 : data2 < data3 ? min = data2 : min = data3;
    return min;
}
