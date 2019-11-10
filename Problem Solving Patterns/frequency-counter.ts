/**
 * Write function called same(arr1, arr2), which accepts two arrays.
 * It should return true if every value in the first array has it's corresponding
 * value squared in the second array
 */
// O(N)
function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    let keySquared = parseInt(key) ** 2;
    // Check if key squared of frequencyCounter1 exists in frequencyCounter2
    if (!(keySquared in frequencyCounter2)) {
      return false;
    }
    // Check if values of keys in frequencyCounter1 and frequencyCounter2 correspond
    if (frequencyCounter2[keySquared] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

function sameFrequency(num1: number, num2: number): boolean {
  if (String(num1).length !== String(num2).length) {
    return false;
  }
  let occurances = {};
  // Map all occurances of each number to an object
  for (let val of String(num1)) {
    occurances[val] = (occurances[val] || 0) + 1;
  }
  for (let val of String(num2)) {
    if (!occurances[val]) {
      return false;
    }
  }
  return true;
}
