/**
 * Given a sorted array and target average, return true if there is a pair
 * of values in the array where the average of the pair equals the target
 * average. There may be more than one pair that matches the average target.
 * @param arr sorted array of integers
 * @param avg floating point average
 */
function averagePair(arr: number[], avg: number): boolean {
  if (arr.length === 0) {
    return false;
  }
  let min = 0;
  let max = arr.length - 1;
  while (min < max) {
    let tempAvg = (arr[min] + arr[max]) / 2;
    if (tempAvg > avg) {
      max--;
    } else if (tempAvg < avg) {
      min++;
    } else if (tempAvg === avg) {
      return true;
    }
  }
  return false;
}
