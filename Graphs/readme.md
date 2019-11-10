# Graphs

A data structure that consists of a finite (and possibly mutable) set of vertices or nodes or points, together wit ha set of unordered pairs of these vertices for an undirect graph or a set of ordered pairs for a directed graph

- **Vertex** - A node
- **Edge** - Connection between nodes

### Uses of Graphs

- Social Networks
- Location/Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations

## Types of Graphs

- Undirected Graph: No direction associated with an edge
- Directed Graph: Direction associated with an edge
- Weighted Graph: Edges have values associated with them
- Unweighted Graph: Edges do not have values associated with them

### Adjacency Matrix

- Two-dimensial structure usually implemented with nested arrays (information stored in rows and columns)
- Can take up less space (in sparse graphs)
- Faster to iterate over all edges
- Can be slower to lookup specific edge

- Add Vertex: `O(V^2)`
- Add Edge: `O(1)`
- Remove Vertex: `O(V^2)`
- Remove Edge: `O(1)`
- Query: `O(1)`
- Storage: `O(V^2)`

### Adjacency List

- Use array/list to store the edges
- Can use a hash table if vertices are not numerical
- Takes up more sapce (in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specifc edge

* Add Vertex: `O(1)`
* Add Edge: `O(1)`
* Remove Vertex: `O(|V| + |E|)`
* Remove Edge: `O(|E|)`
* Query: `O(|V| + |E|)`
* Storage: `O(|V| + |E|`

## Graph Traversal

Uses:

- Peer to peer networking
- Web crawlers
- Finding "closest" matches/recommendations
- Shortest path problems
  - GPS Navigation
  - Solving Mazes
  - AI (Shortest path to win game)
