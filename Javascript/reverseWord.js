function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(function(word) {
      const lastChar = word[word.length - 1];
      let punctuation = '';
      if (['.', ',', '!', '?', ';', ':'].includes(lastChar)) {
        punctuation = lastChar;
        word = word.slice(0, -1);
      }
      return word.split('').reverse().join('') + punctuation;
    });
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
  }
    const inputSentence = "How are you!";
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log(reversedSentence); 
  