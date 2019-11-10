function areThereDuplicates(): boolean {
  let occurrences = {};
  for (let val in arguments) {
    occurrences[arguments[val]] = (occurrences[arguments[val]] || 0) + 1;
  }
  for (let key in occurrences) {
    if (occurrences[key] > 1) return true;
  }
  return false;
}
