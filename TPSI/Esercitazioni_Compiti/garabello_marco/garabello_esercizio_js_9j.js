function printatt(obj1,obj2){
    //let att2 = Object.keys(obj2);

    console.log("oggetto 1:\n");
    for(attribute in obj1){
        console.log(`Nome: ${attribute}`);
        console.log(`Tipo: ${typeof(obj1[attribute])}`)
        if(typeof(obj1[attribute]) == 'string')
            console.log(`Valore: ${obj1[attribute].toLowerCase()}\n`);
        else 
            console.log(`Valore: ${obj1[attribute]}\n`);
    }

    console.log("oggetto 2:\n");
    for(attribute in obj2){
        console.log(`Nome: ${attribute}`);
        console.log(`Tipo: ${typeof(obj2[attribute])}`)
        if(typeof(obj2[attribute]) == 'string')
            console.log(`Valore: ${obj2[attribute].toLowerCase()}\n`);
        else 
            console.log(`Valore: ${obj2[attribute]}\n`);
    }
}

let obj1 = {
    a: "AA",
    b: 3,
    c: "d",
    e: true,
    f: 5
}

let obj2 = {
    a: "AdA",
    b: 4,
    c: "KkJ",
    e: false,
    f: 20
}

let obj3 = {
    a: "BB",
    b: 20,
    c: "J",
    e: true,
    f: 1
}

let obj4 = {
    a: "TeST",
    b: 9,
    c: "MIAOW",
    e: false,
    f: 15
}

console.log("test1:");
printatt(obj1,obj2);
console.log("\ntest2:");
printatt(obj3,obj4);