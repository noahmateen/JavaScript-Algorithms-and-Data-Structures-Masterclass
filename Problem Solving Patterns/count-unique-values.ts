/**
 * Implement a function which accepts a sorted array, and counts
 * the unique values in the array. There can be negative numbers.
 * @param arr
 */
function countUniqueValues(arr: number[]) {
  let i = 0;
  for (let j = 1; j < arr.length; i++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
