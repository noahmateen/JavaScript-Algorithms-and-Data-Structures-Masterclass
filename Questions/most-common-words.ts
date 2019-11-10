function mostCommonWords(text, wordsToExclude) {
  let results = [];
  // Regex to remove punctuation
  let punctuationRegex = /[.?!'’,;:_\-()\[\]{}`"]/g;
  // Split on spaces
  let wordsToAnalyze = text
    .toLowerCase()
    .replace(punctuationRegex, ' ')
    .split(' ');
  let frequency = {};

  // Iterate over every word and update frequency
  for (let word of wordsToAnalyze) {
    if (word !== '') {
      frequency[word] = isNaN(frequency[word]) ? 1 : frequency[word] + 1;
    }
  }
  // Remove words to exclude
  for (let word of wordsToExclude) {
    if (frequency[word.toLowerCase()]) {
      delete frequency[word.toLowerCase()];
    }
  }

  let values = Object.values(frequency);
  let max = values.sort()[values.length - 1];

  Object.keys(frequency).forEach(key => {
    if (frequency[key] === max) {
      results.push(key);
    }
  });

  return results;
}

var string = `Jack and Jill went to the market to buy bread and cheese. Cheese is Jack’s and Jill’s favorite food.`;

mostCommonWords(string, ['and', 'he', 'the', 'to', 'is', 'Jack', 'Jill']);
