class Orario {
    constructor(h, m, s) {
      this.h = h;
      this.m = m;
      this.s = s;
    }
  
    msDiff(n) {
      const thisMs = this.toMs();
      const nMs = n.toMs();
      return Math.abs(thisMs - nMs);
    }
  
    secondDiff(n) {
      return Math.floor(this.msDiff(n) / 1000);
    }
  
    minDiff(n) {
      return Math.floor(this.secondDiff(n) / 60);
    }
  
    hDiff(n) {
      return Math.floor(this.minDiff(n) / 60);
    }
  
    toMs() {
      return (this.h * 3600 + this.m * 60 + this.s) * 1000;
    }
  }
  const ora1 = new Orario(11, 23, 15);
  const ora2 = new Orario(17, 20, 3);
  
  console.log(`ms: ${ora1.msDiff(ora2)}`);
