/**
 * Given two strings, write a function to determine if the second string is an
 * anagram of the first. An anagram is a word, phrase or name formed by rearranging
 * the letters of another, such as cinema formed from iceman.
 *
 * Assume everything is lowercased, single-words, no spaces, periods, punctuations or numbers.
 */

function anagram(str1: string, str2: string) {
  if (str1.length !== str2.length) {
    return false;
  }
  let occurances = {};
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    occurances[char] = occurances[char] ? (occurances[char] += 1) : 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!occurances[char]) {
      return false;
    } else {
      occurances[char] -= 1;
    }
  }
  return true;
}
