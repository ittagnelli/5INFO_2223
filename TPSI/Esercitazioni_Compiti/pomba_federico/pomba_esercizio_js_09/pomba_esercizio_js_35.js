
let stringa= "supercalifragilistichespiralidoso"


function Duplicati(stringa) {

    let set = new Set(stringa); 

    return ([set].join('')); 
  }
  console.log(Duplicati(stringa));