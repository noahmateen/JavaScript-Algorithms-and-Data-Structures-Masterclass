function moviesOnFlight(moviesArr, duration) {
  moviesArr.sort();
  const MAX_DURATION = duration - 30;
  let result = [0, 0];

  let first = 0;
  let last = moviesArr.length - 1;

  while (first < last) {
    let duration1 = moviesArr[first];
    let duration2 = moviesArr[last];
    let sum = duration1 + duration2;
    if (sum < MAX_DURATION) {
      first++;
    } else {
      last--;
    }
    if (sum > result[0] + result[1] && sum <= MAX_DURATION) {
      result[0] = duration1;
      result[1] = duration2;
    }
  }

  return result;
}
