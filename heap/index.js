class MinHeap {
  constructor() {
    this.heap = [];
  }
  buildHeap() {
    let currentParent = this.#getParentChild(this.heap.length - 1); // get last parent of heap
    for (let i = currentParent; i >= 0; i--) {
      this.#hepifyDown(i);
    }
  }
  #hepifyDown(current) {
    let endIndex = this.heap.length - 1;
    let leftIdx = this.#getLeftChild(current);
    while (leftIdx <= endIndex) {
      let rightIndex = this.#getRightChild(current);
      let IdxtoShift;
      if (
        rightIndex <= endIndex &&
        this.heap[leftIdx] > this.heap[rightIndex]
      ) {
        IdxtoShift = rightIndex;
      } else {
        IdxtoShift = leftIdx;
      }
      if (this.heap[current] > this.heap[IdxtoShift]) {
        [this.heap[current], this.heap[IdxtoShift]] = [
          this.heap[IdxtoShift],
          this.heap[current],
        ];
        leftIdx = this.#getLeftChild(current);
      } else {
        return;
      }
    }
  }
  #hepifyUp(current) {
    let parentIdx = this.#getParentChild(current);
    while (current > 0 && this.heap[parentIdx] > this.heap[current]) {
      [this.heap[current], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[current],
      ];
      current = parentIdx;
      parentIdx = this.#getParentChild(current);
    }
  }
  remove() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop();
    this.#hepifyDown(0);
  }
  insertValue(value) {
    this.heap.push(value);
    this.#hepifyUp(this.heap.length - 1);
  }
  peek() {
    return this.heap[0];
  }
  #getLeftChild(index) {
    return index * 2 + 1;
  }
  #getRightChild(index) {
    return index * 2 + 2;
  }
  #getParentChild(index) {
    return Math.floor((index - 1) / 2);
  }
  displayHeap() {
    console.log(this.heap);
  }
}
const heap = new MinHeap();
heap.insertValue(19);
heap.insertValue(15);
heap.insertValue(3);
heap.insertValue(23);
heap.insertValue(1);
// heap.remove()
heap.displayHeap();
