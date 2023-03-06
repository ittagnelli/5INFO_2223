function countWordOccurrences(text) {
    const words = text.split(' ');
    return words.reduce((wordCounts, word) => {
      if (wordCounts[word]) {
        wordCounts[word]++;
      } else {
        wordCounts[word] = 1;
      }
      return wordCounts;
    }, {});
  }
  
  const text = 'Javascript è un linguaggio molto bello. Javascript è un linguaggio di alto livello';
  const wordOccurrences = countWordOccurrences(text);
  console.log(wordOccurrences);
  

  