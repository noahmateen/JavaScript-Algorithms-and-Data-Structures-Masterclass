/**
 * Function which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements
 * in the array.
 * @param arr
 * @param n
 */
function maxSubarraySum(arr: number[], n: number) {
  if (arr.length < n) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    // Add value of new element and subtract value of first element in array
    tempSum = tempSum + arr[i] - arr[i - n];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
