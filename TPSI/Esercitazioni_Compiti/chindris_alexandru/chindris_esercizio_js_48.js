class Orario {
    constructor (s,m,h) {
        this.s = s;
        this.m = m;
        this.h = h;
    }

    differenzams(orario2){
        let millisecondi1 = orario2.s*1000 + ((orario2.m*60)*1000) + (((orario2.h *60)*1000)*1000);
        let millisecondi2 = this.s*1000 + ((this.m*60)*1000) + (this.h*60*1000);

        return millisecondi2 - millisecondi1;
    }

    differenzas(orario2){
        let millisecondi1 = orario2.s + ((orario2.m*60)) + (((orario2.h *60)));
        let millisecondi2 = this.s + (this.m*60) + (this.h*60);

        return millisecondi2 - millisecondi1;
    }

    differenzam(orario2){
        let millisecondi1 = orario2.s + ((orario2.m*60)) + (((orario2.h *60)));
        let millisecondi2 = this.s + (this.m*60) + (this.h*60);

        return millisecondi2 - millisecondi1;
    }

    differenzah(orario2){
        let millisecondi1 = orario2.s + ((orario2.m*60)) + (((orario2.h *60)));
        let millisecondi2 = this.s + (this.m*60) + (this.h*60);

        return millisecondi2 - millisecondi1;
    }
}

let data1 = new Orario(100000000000,30,2);
let data2 = new Orario(100000,30000,2);

console.log(`Differenza tra millisecondi:${data1.differenzams(data2)}`);
console.log(`Differenza tra secondi: ${data1.differenzas(data2)/1000}`);
console.log(`Differenza tra minuti: ${data1.differenzam(data2)/1000/60}`);
console.log(`Differenza tra ora: ${data1.differenzah(data2)/1000/60/60}`);