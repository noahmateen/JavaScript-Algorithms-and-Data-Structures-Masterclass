/**
 * 1) Create a min heap and insert all lengths into the min heap.
 * 2) Do following while number of elements in min heap is not one.
 * ……a) Extract the minimum and second minimum from min heap
 * ……b) Add the above two extracted values and insert the added value to the min-heap.
 * ……c) Maintain a variable for total cost and keep incrementing it by the sum of extracted values.
 * 3) Return the value of this total cost.
 */

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  extractMin() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element >= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex > length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex > length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (!swap) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

function connectRopes(arr) {
  let heap = new MinBinaryHeap();
  // Generate min heap with all values
  for (let el of arr) {
    heap.insert(el);
  }

  let cost = 0;

  while (heap.values.length !== 1) {
    let min1 = heap.extractMin();
    let min2 = heap.extractMin();
    let sum = min1 + min2;
    cost += sum;
    heap.insert(sum);
  }
  if (heap.values.length === 1) {
    cost += heap.extractMin();
  }
  return cost;
}
