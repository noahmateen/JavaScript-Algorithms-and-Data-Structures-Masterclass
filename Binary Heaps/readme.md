# Binary Heaps

Very similar to Binary Search Tree, each node can have max two children

In a **MaxBinaryHeap**, parent nodes are always larger than child nodes. In a **MinBinaryHeap**, parent nodes are always smaller than child nodes.

## Max Binary Heap

- Each parent has at most two child nodes
- Value of each parent node is always greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the child of each node are as full as they can be and left children are filled out first.

* Insertion: `O(log n)`
* Removal: `O(log n)`
* Searching: `O(n)`
* Access: `O(n)`

## Priority Queue

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.
