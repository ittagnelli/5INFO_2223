function countVowelOccurrences(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelCounts = new Map();
    for (const char of str) {
      if (vowels.includes(char)) {
        const count = vowelCounts.get(char) || 0;
        vowelCounts.set(char, count + 1);
      }
    }
    return vowelCounts;
  }
  
  const str = 'supercalifragilistichespiralidoso';
  const vowelOccurrences = countVowelOccurrences(str);
  console.log(vowelOccurrences);

  
  