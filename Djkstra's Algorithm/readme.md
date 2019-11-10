# Dijkstra's Algorithm

Finds the shortest path between two vertices on a graph

### Uses

- GPS: finding fastest route
- Network routing:finds open shortest path for data
- Biology: used to model the spread of viruses among humans
- Airline tickets: finding cheapest route to your destination

The Approach

1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
2. Once we've moved to the node we're going to visit, we look at each of its neighbors
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking _from the starting node_
4. If the new total distance to a node is less than teh previous total, we store the new shorter distance for that node
