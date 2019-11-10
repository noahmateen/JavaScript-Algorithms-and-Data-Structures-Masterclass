function naiveStringSearch(longString, shortString) {
  let count = 0;
  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < shortString.length; j++) {
      if (longString[i + j] !== shortString[j]) break;
      if (j === shortString.length - 1) count++;
    }
  }
  return count;
}
