// RECURSIVE: 2^(n+m)
function lcs(p, q, n, m) {
  let result;
  if (n === 0 || m === 0) {
    result = 0;
  } else if (p[n - 1] === q[m - 1]) {
    result = 1 + lcs(p, q, n - 1, m - 1);
  } else if (p[n - 1] !== q[n - 1]) {
    let temp1 = lcs(p, q, n - 1, m);
    let temp2 = lcs(p, q, n, m - 1);
    result = Math.max(temp1, temp2);
  }
  return result;
}

// Dynamic Programming
function lcsMemoized(p, q, n, m) {
  let matrix = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  return helper(p, q, n, m, matrix);
}

function helper(p, q, n, m, matrix) {
  let result;
  if (n === 0 || m === 0) {
    result = 0;
  } else if (p[n - 1] === q[m - 1]) {
    result = 1 + lcsMemoized(p, q, n - 1, m - 1);
  } else {
    let temp1 = lcsMemoized(p, q, n - 1, m);
    let temp2 = lcsMemoized(p, q, n, m - 1);
    result = Math.max(temp1, temp2);
  }
  matrix[n][m] = result;
  return result;
}

lcsMemoized('AA', 'AAB', 2, 3);
