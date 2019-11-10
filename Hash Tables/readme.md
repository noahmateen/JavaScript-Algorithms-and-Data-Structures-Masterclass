# Hash Tables

Hash tables are used to store key-value pairs. They are like arrays, but the keys are not ordered. They are really fast for finding values, adding values, removing values.

- Insertion: `O(1)`
- Deletion: `O(1)`
- Access: `O(1)`

## Hashing

To implement a hash table, we will use an array. In order to look up values by key, we need a way to convert keys into valid array indices. A function that performs this task is called a hash function

### Hash Functions

What makes a good hash? (not a cryptographically secure one though)

- Fast (i.e. constant time)
- Doesn't cluster outputs at specific indicies, but distributes uniformly
- Deterministic (same input yields same output)

### Dealing With Collisions

Linear Probing

Separate Chaining
