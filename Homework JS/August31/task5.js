function makeAbbr(words) {
    return words
      .split(' ')
      .reduce((prevVal, curWord) => prevVal + (curWord ? curWord[0]: ''), '')
      .toUpperCase()
  }
  console.log(makeAbbr('cascading style sheets'))