function removeAnagrams(arr) {
    const anagrams = new Set();
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const word = arr[i];
      const sortedWord = word.split('').sort().join('');
      if (!anagrams.has(sortedWord)) {
        console.log(word + " added to result array");
        result.push(word);
        anagrams.add(sortedWord);
      } else {
        console.log(word + " is an anagram and will not be added to the result array");
      }
    }
    return result;
  }
  
  const arr = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione'];
  console.log(removeAnagrams(arr));
  