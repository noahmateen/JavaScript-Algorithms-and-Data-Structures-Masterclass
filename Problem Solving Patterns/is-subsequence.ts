/**
 * Takes in two strings and checks whether the characters in the first string form
 * a subsequence of characters in the second string. The function should check whether
 * the characters in the first string appear somewhere in the second string, without
 * their order changing
 * @param str1
 * @param str2
 */
function isSubsequence(str1: string, str2: string) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}
