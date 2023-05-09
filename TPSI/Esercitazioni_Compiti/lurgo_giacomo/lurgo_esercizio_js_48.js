class Orario {
    #h = 0
    #m = 0
    #s = 0
    constructor(h, m, s) {
        this.#h = h
        this.#m = m
        this.#s = s
    }

    millisec() {
        return (this.#s * 1000 + this.#m * 60 * 1000 + this.#h * 60 * 60 * 1000)
    }

    differenza(time) {
        let differenza = Math.abs(this.millisec() - time.millisec())
        return {
            ms: differenza,
            s: differenza / 1000,
            m: differenza / (1000 * 60),
            h: differenza / (1000 * 60 * 60)
        }
    }
}

let a = new Orario(12, 32, 59);
let b = new Orario(2, 30, 50)
let risultato = a.differenza(b);

console.log(`ms:${risultato.ms}`)
console.log(`s:${risultato.s}`)
console.log(`m:${risultato.m}`)
console.log(`h:${risultato.h}`)

a = new Orario(2, 32, 59);
b = new Orario(12, 16, 42)
risultato = a.differenza(b);

console.log(`ms:${risultato.ms}`)
console.log(`s:${risultato.s}`)
console.log(`m:${risultato.m}`)
console.log(`h:${risultato.h}`)