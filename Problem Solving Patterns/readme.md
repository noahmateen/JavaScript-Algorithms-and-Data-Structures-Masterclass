# Problem Solving Patterns

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking

## Frequency Counter Pattern

Pattern uses objects or sets to collect values/frequencies of their values.

Can often avoid need for nested loops or O(N^2) operations with arrays/strings. Usually O(n).

Useful for checking multiple pieces of data and need to compare them. See if they consist of the same individual pieces, such as array equality, anagrams, numbers consisting of same digits in just a different order.

## Multiple Pointers Pattern

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

Very efficient for solving problems wit minimal space complexity as well.

## Sliding Window Pattern

Involves creating a window which can either be an array or number from one position to another. 

Depending on a certain condition, the window either increases or closes (and a new window is created).

Useful for keeping t rack of a subset of data in an array/string

## Divide and Conquer Pattern

Involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity.