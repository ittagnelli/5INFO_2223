class Orario {
    constructor(h, m, s) {
      this.h = h;
      this.m = m;
      this.s = s;
    }
  
}   
getMsDiff(other) {
const thisMs = this.toMs();
const otherMs = other.toMs();
return Math.abs(thisMs - otherMs);
}
  
getSecDiff(other) {
return Math.floor(this.getMsDiff(other) / 1000);
}
  
getMinDiff(other) {
return Math.floor(this.getSecDiff(other) / 60);
}
  
getHourDiff(other) {
return Math.floor(this.getMinDiff(other) / 60);
}
  
toMs() {
return (this.h * 3600 + this.m * 60 + this.s) * 1000;
}

  

const ora1 = new Orario(10, 30, 15);
const ora2 = new Orario(12, 45, 20);
  
console.log(`Differenza in ms: ${ora1.getMsDiff(ora2)}`);
console.log(`Differenza in sec: ${ora1.getSecDiff(ora2)}`);
console.log(`Differenza in min: ${ora1.getMinDiff(ora2)}`);
console.log(`Differenza in ore: ${ora1.getHourDiff(ora2)}`);