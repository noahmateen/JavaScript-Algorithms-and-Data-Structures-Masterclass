/**
 * Given a sorted array of integers, accept a value and return
 * the index where the value passed to the function is located.
 * If the value is not found, return -1
 * @param arr sorted array of integers
 * @param val value to search for
 */
function search(arr: number[], val: number) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currEl = arr[middle];

    if (arr[currEl] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
