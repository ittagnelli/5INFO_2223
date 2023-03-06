let stringa= "supercalifragilistichespiralidoso"

function eliminaDuplicati(stringa) {
    let set = new Set(stringa); 
    return ([...set].join('')); 
  }
  console.log(eliminaDuplicati(stringa));