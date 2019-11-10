# Recursion

A process (function) that calls itself

- JSON.parse / JSON.stringify are both recursive functions
- document.getElementById, DOM Traversal, Object traversal

Recursive functions keep pushing the same function onto the call stack.

Invoke the same function with a different input until you reach the base case. The base case is where the recursion ends. Essentially adds smaller iterations on the call stack until the base case is reached then start popping them off

#### Where things go wrong

- No base case
- Forgetting to return or returning the wrong thing
- Stack overflow (recursion is not stopping)

## Helper Method Recursion

Calling an outer function that is not recursive that has inside it defined a recursive function.

Defining a function inside another function that then calls itself again. Good for compiling an array or list of data (like collecting all odd values in an array).

## Pure Recursion

Function is self-contained and is recursive.

- For arrays, use methods like `slice`, the *spread* operator, and `concat` that make copies of arrays so you do not mutate them.
- Remember that strings are immutable so you will need to use methods like `slice`, `substr`, or `substring` to make copies of things
- To make copies of objects use `Object.assign` or the *spread* operator