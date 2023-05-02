class Orario {
    constructor(h, m, s) {
        this.h = h;
        this.m = m;
        this.s = s;
    }
    Calcola(orario){
       return this.Diff(orario) == 0 ? "i due orari sono uguali" : this.Diff(orario) < 0 ? "è minore il primo" : "è minore il secondo";
       
    }

    Diff(orario){
        return this.Convert() - orario.Convert();
    }

    Convert() {
        return (this.h*3600 + this.m*60 + this.s) * 1000;
    }

}

let time1 = new Orario(2,3,10);
let time2 = new Orario(10, 10, 30);
console.log(time1.Calcola(time2));
