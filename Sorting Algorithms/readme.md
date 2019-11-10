# Sorting Algorithms

## Bubble Sort

Sorting algorithm where the largest values bubble up to the top. Use only if you know your data is mostly sorted already.

Time Complexity: `O(n^2)`
Space Complexity: `O(1)`

## Selection Sort

Similar to bubble sort, but instead of first placing large values into the sorted position, it places small values into sorted position.

Time Complexity: `O(n^2)`
Space Complexity: `O(1)`

## Insertion Sort

Builds up sort by gradually creating a larger left half which is always sorted. Works well in situation where data is coming in live and needs to be sorted.

Time Complexity: `O(n^2)`
Space Complexity: `O(1)`

## Merge Sort

A combination of splitting up, merging and sorting. Exploits the fact that arrays of 0 or 1 element are already sorted. Works by decompsing arrays into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

Time Complexity: `O(n log n)`; `O(log n)` decompositions (splitting up the array), `O(n)` comparisons per decomposition
Space Complexity: `O(n)`;

## Quick Sort

Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted. Works by selecting one element (called the pivot) and finding the index where the pivor should end up in the sorted array.

Useful to implement a function responsible for arranging elements in an array on either side of a pivot

Runtime of quick sort depends in part on how one select the pivot. The pivor should be chosen so that it's roughly the median value in the data you're sorting.

Time Complexity: `O(n log n)`; `O(log n)` decompositions (splitting up the array), `O(n)` comparisons per decomposition
Space Complexity: `O(n)`;
