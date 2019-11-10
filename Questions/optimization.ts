function maxSum(x, y, maxTotal) {
  x.sort((a, b) => {
    return a[1] - b[1];
  });
  y.sort((a, b) => {
    return a[1] - b[1];
  });
  let i = 0;
  let j = y.length - 1;
  let results = [];
  let currentMax = 0;
  let sum;

  while (i < 3 && j >= 0) {
    sum = x[i][1] + y[j][1];
    if (sum === maxTotal) {
      results.push([i, j]);
    } else if (sum < maxTotal && sum >= currentMax) {
      currentMax = sum;
      results.push([i, j]);
      i++;
    } else {
      j--;
    }
  }

  let newResults = [];

  for (let el of results) {
    let first = x[el[0]][1];
    let second = y[el[1]][1];

    let tempSum = first + second;
    if (tempSum >= currentMax) {
      newResults.push([el[0], el[1]]);
    }
  }

  return newResults;
}

maxSum(
  [[0, 5000], [1, 3000], [2, 2000]],
  [[0, 6000], [1, 4000], [2, 3000]],
  10000
);
