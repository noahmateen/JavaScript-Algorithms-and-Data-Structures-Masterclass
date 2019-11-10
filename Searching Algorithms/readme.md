# Searching Algorithms

- Linear search on arrays
- Binary search on sorted arrays
- `.indexOf` is a searching algorithm

### Linear Search

Go through one by one and check until we find it.

- `.indexOf`, `.includes`, `.find`, `.findIndex` are all using linear search
- Time Complexity: `O(n)` at worst & average, `O(1)` at best

### Binary Search

- Much faster form of search, but requires collection to be sorted
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Based off of Divide and Conquer
- Log base 2 of n to determine steps to determine if element is in array
- Time complexity: `O(log n)` at worst & average, `O(1)` at best