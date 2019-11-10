function sortSpace(truckSpace, packagesArr) {
  // Return 2 el from packagesArr that sum to truckSpace - 30;
  const NEEDED_SIZE = truckSpace - 30;
  // Sort Array in increasing order
  const originalArr = [...packagesArr];
  packagesArr.sort();
  // Initial two index variables to find a candidate element
  // Initialize first to the leftmost index
  let left = 0;
  // Initialize second to the rightmost index
  let right = packagesArr.length - 1;
  // Loop while left < right
  while (left < right) {
    let tempSum = packagesArr[left] + packagesArr[right];
    // If left + right === sum --> return
    // else if left + right < sum --> increment left
    // else decrement right
    if (tempSum === NEEDED_SIZE) {
      // Get original indices (aka IDs) of packages
      const originalLeft = originalArr.indexOf(packagesArr[left]);
      const originalRight = originalArr.indexOf(packagesArr[right]);
      return [originalLeft, originalRight];
    } else if (tempSum > NEEDED_SIZE) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}

sortSpace(90, [1, 10, 25, 35, 60]);
