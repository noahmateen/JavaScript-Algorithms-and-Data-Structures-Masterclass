# Data Structures

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

## Arrays

- Indexed in order
- Insertion and deletion can be expensive
- Can be quickly accessed at a specific index

## Linked Lists

- Data structure that contains a head, tail and length property
- Consists of nodes, and each node has a value and a point to another node or null
- Do not have indices, connecte via nodes with a **next** pointer
- Random access is not allowed

* Insertion: `O(1)`
* Removal: `O(1)` or `O(n)`
* Searching: `O(n)`
* Access: `O(n)`

## Doubly Linked Lists

- Takes more memory than a Singly Linked List but provides more flexibility

* Insertion: `O(1)`
* Removal: `O(1)`
* Searching: `O(n)`
* Access: `O(n)`

## Stacks

Abstract data structure of a collection of data that abides by LIFO

- Managing function invocations
- Undo/Redo
- Routing (history in a browser)

* Insertion: `O(1)`
* Removal: `O(1)`
* Searching: `O(n)`
* Access: `O(n)`

## Queues

Abstract data structure of a collection of data that abides by FIFO

- Background tasks
- Uploading resources
- Printing / Task processing

* Insertion: `O(1)`
* Removal: `O(1)`
* Searching: `O(n)`
* Access: `O(n)`
