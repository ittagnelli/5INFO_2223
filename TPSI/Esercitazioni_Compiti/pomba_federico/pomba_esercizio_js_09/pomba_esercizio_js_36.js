let string ="supercalifragilistichespiralidoso";

function vocali(str) {

    let voc = {
      'a': 0,
      'e': 0,
      'i': 0,
      'o': 0,
      'u': 0
      
    };
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char in voc) {
        voc[char]++;
      }
    }
    return voc;
  }
  
  console.log(vocali(string));
