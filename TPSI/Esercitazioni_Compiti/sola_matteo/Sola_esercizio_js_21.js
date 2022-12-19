function azzera_multipli(arr, N) {
    arr.forEach((element, idx) => {
        if(element%N==0)
            arr[idx] = 0;
    });

    return arr
}

let numeri = [];
for(let i=0; i<100; i++) {
    numeri.push(Math.floor(Math.random() * 50 + 1));
}

console.log(azzera_multipli(numeri, 5));