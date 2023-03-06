function removeDuplicates(str) {
    let uniqueChars = '';
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (uniqueChars.indexOf(char) === -1) {
        uniqueChars += char;
      }
    }
    return uniqueChars;
  }
  
  const input = 'supercalifragilistichespiralidoso';
  const output = removeDuplicates(input);
  console.log(output); 
  

  