let stringa ="supercalifragilistichespiralidoso";

function vocali(str) {
    let mappaVocali = {
      'a': 0,
      'e': 0,
      'i': 0,
      'o': 0,
      'u': 0
    };
    for (let i = 0; i < str.length; i++) {
      let carattere = str[i];
      if (carattere in mappaVocali) {
        mappaVocali[carattere]++;
      }
    }
    return mappaVocali;
  }
  
  console.log(vocali(stringa));