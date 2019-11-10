// THIS IS BAD. O(2^) Time Complexity
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// THIS IS GOOD. O(N)
// Can run into stack overflow with large numbers
function fibDynamic(n, memo = []) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  let res = fibDynamic(n - 1, memo) + fibDynamic(n - 2, memo);
  memo[n] = res;
  return res;
}

// THIS IS GOOD. Bottom up approach
function fibTabulation(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
}
