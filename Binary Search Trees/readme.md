# Trees

Data structures that consist of nodes in a parent/child relationship and are non-linear

- **Root:** The top node in the tree
- **Child:** A node directly connected to another node when moving away from the Root
- **Parent:** The converse notion of a child
- **Siblings:** A group of nodes with the same parent
- **Leaf:** A node with no children
- **Edge:** The connection between one node and another

Examples of Trees:

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- File System

## Binary Trees

Each node can have at most two children

## Binary Search Trees

- Every parent node has at most two children
- Every node to the left of the parent node is always less than the parent
- Every node to the right of the parent node is always greater than the parent

* Insertion: `O(log n)`
* Removal: `O(1)`
* Searching: `O(log n)`
* Access: `O(n)`

### Tree Traversal

**Breadth First Search:** Visiting every node at each level first

Searching Iteratively

- Create queue and variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node dequeued - add it to the queue
  - If there is a right property on the node dequeued - add it to the queue
  - Return the variable that stores the value

**Depth First Search PreOrder:**

Searching Recursively

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which acceps a node
  - Push the value of the node to the variable that stores the values
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable

**Depth First Search PostOrder:**

Searching Recursively

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which acceps a node
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
  - Push the value of the node to the variable that stores the values
- Invoke the helper function with the current variable

**Depth First Search InOrder:**

Searching Recursively

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which acceps a node
  - If the node has a left property, call the helper function with the left property on the node
  - Push the value of the node to the variable that stores the values
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable

#### Breadth First vs Depth First

Time complexity is the same

Wide tree: Use DFS
Tall tree: Use BFS

#### DFS Types:

- InOrder: Get all trees in their underlying order
- PreOrder: Can be used to "export" a tree structure so that it is easily reconstructed or copied
