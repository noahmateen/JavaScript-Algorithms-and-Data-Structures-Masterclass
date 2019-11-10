function reverse(str: string): string {
  if (str.length === 1) {
    return str[0];
  }
  return reverse(str.substr(1, str.length - 1)) + str[0];
}
