let str = "Javascript è un linguaggio molto bello. Javascript è un linguaggio di alto livello";

function test(str) {
    let vet = [];
    vet = str.split(" ");
    let count = 0;
    let mp = new Map();

    vet.forEach(item => {
            if(mp.has(item)) {
                mp.set(item, mp.get(item) +1);
            }else{
                mp.set(item, 1);
            }
    });
    for(let [k,v] of mp){
        console.log(`La parola ${k} ha frequenza ${v}`);
    }
}

test(str);