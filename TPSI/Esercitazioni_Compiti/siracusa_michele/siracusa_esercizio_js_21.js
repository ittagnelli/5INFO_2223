function reset_multiples(array, Num) {

    array.forEach((element, idx) => {

        if(element%Num==0)
            array[idx] = 0;
    });

    return array;
}

let numbers = [];
for(let i=0; i<100; i++) {
    
    numbers.push(Math.floor(Math.random() * 50 + 1));
}

console.log(reset_multiples(numbers, 5));


