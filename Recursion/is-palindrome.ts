function isPalindrome(str: string): boolean {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }

  return false;
}
