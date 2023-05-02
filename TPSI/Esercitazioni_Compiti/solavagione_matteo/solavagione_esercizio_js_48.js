class Orario {
    constructor(h, m, s) {
        this.h = h;
        this.m = m;
        this.s = s;
    }
    Calcola(orario){
        let diff_mill = Math.abs(this.Convert() - orario.Convert());
        let diff_sec = Math.abs(Math.floor((this.Convert() - orario.Convert()) / 1000));
        let diff_min = Math.abs(Math.floor(((this.Convert() - orario.Convert()) / 1000) / 60));
        let diff_ore = Math.abs(Math.floor((((this.Convert() - orario.Convert()) / 1000) / 60) / 60));
        return {
            "millisec": diff_mill,
            "secondi": diff_sec,
            "minuti":diff_min,
            "ore":diff_ore

        };
    }

    Convert() {
        return (this.h*3600 + this.m*60 + this.s) * 1000;
    }

}
let time1 = new Orario(1,20,30);
let time2 = new Orario(2,10,5);
console.log(time1.Calcola(time2));
console.log("--------------------")
let time3 = new Orario(10,45,5);
let time4 = new Orario(22,34,19);
console.log(time3.Calcola(time4));

