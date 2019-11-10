class XNode {
  left;
  right;
  value;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  root;

  constructor() {
    this.root = null;
  }

  findSum(node) {
    if (!node.left && !node.right) return node.value;
    return this.findSum(node.left) + this.findSum(node.right);
  }
}
