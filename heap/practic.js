class MinimumHeap {
  constructor() {
    this.heap = [];
  }

  buildHep(arr) {
    this.heap = [...arr];
    for (let i = this.#getParentChild(this.heap.length - 1); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }
  heapifyDown(currentIdx = 0) {
    let index = currentIdx;
    while (true) {
      let leftChild = this.#getLeftChild(index);
      let rightChild = this.#getRightChild(index);
      let smalleIdx = index;

      if (
        leftChild < this.heap.length &&
        this.heap[leftChild] < this.heap[index]
      ) {
        smalleIdx = leftChild;
      }

      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] < this.heap[index]
      ) {
        smalleIdx = rightChild;
      }
      if (index != smalleIdx) {
        [this.heap[index], this.heap[smalleIdx]] = [
          this.heap[smalleIdx],
          this.heap[index],
        ];
        index = smalleIdx;
      } else {
        break;
      }
    }
  }
  hepifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentChild = this.#getParentChild(index);
      if (this.heap[parentChild] > this.heap[index]) {
        [this.heap[index], this.heap[parentChild]] = [
          this.heap[parentChild],
          this.heap[index],
        ];
      } else {
        break;
      }
    }
  }
  insertValue(value) {
    this.heap.push(value);
    this.hepifyUp();
  }
  remove() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop()
    this.heapifyDown(0)
  }
  #getParentChild(Idx) {
    return Math.floor((Idx - 1) / 2);
  }
  #getLeftChild(Idx) {
    return Idx * 2 + 1;
  }
  #getRightChild(Idx) {
    return Idx * 2 + 2;
  }
  display(){
    console.log(this.heap);
  }
}

const heap=new MinimumHeap()
heap.buildHep([3,345,123,53,1])
heap.insertValue(2)
heap.remove()
heap.display()