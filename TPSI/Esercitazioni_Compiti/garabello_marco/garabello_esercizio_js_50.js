class Orario {
    constructor (h,m,s){
        this.h = h
        this.m = m
        this.s = s
    }

    mill() { 
        return (this.s*1000 + this.m*60*1000+this.h*60*60*1000)
    }


    min (time1,time2) {
        return [this,time1,time2].sort((a,b) => a.mill()-b.mill())[0];
    }
}

let a = new Orario(12,32,59);
let b = new Orario(2,30,50);
let c = new Orario(1,15,22);

Object.values(a.min(b,c)).forEach(el => console.log(el))

a = new Orario(1,3,9);
b = new Orario(14,33,5);
c = new Orario(12,5,29);

console.log("\n")

Object.values(a.min(b,c)).forEach(el => console.log(el))