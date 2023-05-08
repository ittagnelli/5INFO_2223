class Ora{
    constructor(h,min,sec){
        this.h = h;
        this.min = min;
        this.sec = sec;
    }

    Confronto_ms(ora2) {
        let temp_diffs = [];

        temp_diffs[0]= Math.abs(this.h - ora2.h);
        temp_diffs[1]= Math.abs(this.min - ora2.min);
        temp_diffs[2]= Math.abs(this.sec - ora2.sec);

        return (temp_diffs[0]*60*60*1000)+(temp_diffs[1]*60*1000)+(temp_diffs[2]*1000);
    }

    Confronto_sec(ora2) {
        let temp_diffs = [];

        temp_diffs[0]= Math.abs(this.h - ora2.h);
        temp_diffs[1]= Math.abs(this.min - ora2.min);
        temp_diffs[2]= Math.abs(this.sec - ora2.sec);

        return (temp_diffs[0]*60*60)+(temp_diffs[1]*60)+(temp_diffs[2]);
    }

    Confronto_min(ora2) {
        let temp_diffs = [];

        temp_diffs[0]= Math.abs(this.h - ora2.h);
        temp_diffs[1]= Math.abs(this.min - ora2.min);
        temp_diffs[2]= Math.abs(this.sec - ora2.sec);

        return (temp_diffs[0]*60)+(temp_diffs[1])+(temp_diffs[2]/60);
    }

    Confronto_h(ora2) {
        let temp_diffs = [];

        temp_diffs[0]= Math.abs(this.h - ora2.h);
        temp_diffs[1]= Math.abs(this.min - ora2.min);
        temp_diffs[2]= Math.abs(this.sec - ora2.sec);

        return (temp_diffs[0])+(temp_diffs[1]/60)+((temp_diffs[2]/60)/60);
    }

}

let ora1 = new Ora(1,0,0);
let ora2 = new Ora(2,0,0);

console.log(ora1.Confronto_ms(ora2));
console.log(ora1.Confronto_sec(ora2));
console.log(ora1.Confronto_min(ora2));
console.log(ora1.Confronto_h(ora2));
