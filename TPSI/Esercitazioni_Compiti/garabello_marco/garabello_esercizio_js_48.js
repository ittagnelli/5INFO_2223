class Orario {
    #h = 0
    #m = 0
    #s = 0
    constructor (h,m,s){
        this.#h = h
        this.#m = m
        this.#s = s
    }

    mill() { 
        return (this.#s*1000 + this.#m*60*1000+this.#h*60*60*1000)
    }

    diff(time) {
        let diff = Math.abs(this.mill() - time.mill())

        return {
            ms: diff,
            s: diff/1000,
            m: diff/(1000*60),
            h: diff/(1000*60*60)
        }
    }
}


let a = new Orario(12,32,59);
let b = new Orario(2,30,50)

let res = a.diff(b);

console.log(`ms:${res.ms}`)
console.log(`s:${res.s}`)
console.log(`m:${res.m}`)
console.log(`h:${res.h}`)


a = new Orario(2,32,59);
b = new Orario(12,16,42)

res = a.diff(b);

console.log(`ms:${res.ms}`)
console.log(`s:${res.s}`)
console.log(`m:${res.m}`)
console.log(`h:${res.h}`)