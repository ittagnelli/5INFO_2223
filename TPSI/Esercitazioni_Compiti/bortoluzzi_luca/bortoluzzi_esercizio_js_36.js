let stringa ="supercalifragilistichespiralidoso";

function vocali(str) {
    let mappa_voc = {
      'a': 0,
      'e': 0,
      'i': 0,
      'o': 0,
      'u': 0
    };
    for (let i = 0; i < str.length; i++) {
      let carattere = str[i];
      if (carattere in mappa_voc) {
        mappa_voc[carattere]++;
      }
    }
    return mappa_voc;
  }
  
  console.log(vocali(stringa));