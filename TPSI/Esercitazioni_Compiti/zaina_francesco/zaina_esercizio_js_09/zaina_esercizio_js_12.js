function boolean(num1, num2){
    return num1.map((el, idx) => num2[idx] === el).every(item => item == true);

}
    
let num1 = [1, 3, 6, 7];
let num2 = [1, 3, 6, 7];

console.log(boolean(num1, num2));