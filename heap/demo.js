class Heap {
  constructor() {
    this.heap = [];
  }
  buildHeap(arr) {
    this.heap = [...arr];
    for (let i = this.#getParentIndex(this.heap.length - 1); i >= 0; i--) {
      this.#hepifyDown(i);
    }
  }
  #hepifyDown(index) {
    let endIdx = this.heap.length;
    while (true) {
      let leftChildIdx = this.#getLeftChildIndex(index);
      let rightChildIdx = this.#getRightChildIndex(index);
      let smallIdx = index;
      if (leftChildIdx < endIdx && this.heap[leftChildIdx] < this.heap[index]) {
        smallIdx = leftChildIdx;
      }
      if (
        rightChildIdx < endIdx &&
        this.heap[rightChildIdx] < this.heap[index]
      ) {
        smallIdx = leftChildIdx;
      }
      if (index !== smallIdx) {
        [this.heap[index], this.heap[smallIdx]] = [
          this.heap[smallIdx],
          this.heap[index],
        ];
        index = smallIdx;
      } else {
        break;
      }
    }
  }
  #getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  #getLeftChildIndex(i) {
    return i * 2 + 1;
  }
  #getRightChildIndex(i) {
    return i * 2 + 2;
  }
  displayHeap() {
    console.log(this.heap);
  }
  insert(value) {
    this.heap.push(value);
    this.#heapifyUp();
  }
  #heapifyUp() {
    let currenIndex = this.heap.length - 1;
    let parentIndex = this.#getParentIndex(this.heap.length - 1);
    while (currenIndex >= 0) {
      if (this.heap[currenIndex] < this.heap[parentIndex]) {
        [this.heap[currenIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currenIndex],
        ];
        currenIndex = parentIndex;
        parentIndex = this.#getParentIndex(currenIndex);
      } else {
        break;
      }
    }
  }
  remove() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop();
    this.#hepifyDown(0)
  }
  peek(){
    return this.heap[0]
  }
}

const heap = new Heap();
heap.buildHeap([43, 5, 7, 23, 6]);
heap.insert(4);
heap.remove()
heap.displayHeap();
console.log(heap.peek());
