class PriorityQueue {
  constructor() {
    this.heap = [];
  }
  enqueue(element, priority) {
    const node = { element, priority };
    //   console.log(node);
    this.heap.push(node);
    this.#bubleUp();
  }
  dequeue() {
    if (!this.heap.length) {
      return null;
    }
    const min = this.heap[0];
    const lastNode = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastNode;
      this.#bubleDown();
    }
    return min
  }
  #bubleDown() {
    let index = 0;
    while (true) {
      let rightIndex = this.#getRightChildIndex(index);
      let leftIndex = this.#getLeftChildIndex(index);
      let smallIdx = index;
      if (
        leftIndex < this.heap.length &&
        this.heap[index].priority > this.heap[leftIndex].priority
      ) {
        smallIdx = leftIndex;
      }
        if (
            rightIndex < this.heap.length &&
            this.heap[smallIdx].priority > this.heap[rightIndex].priority
        ) {
            smallIdx = rightIndex;
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
  #bubleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.#getParentIndex(index);
    //   console.log(this.heap[index]);
      if (this.heap[index].priority < this.heap[parentIndex].priority) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  #getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  #getRightChildIndex(i) {
    return i * 2 + 1;
  }
  #getLeftChildIndex(i) {
    return i * 2 + 2;
  }
  display() {
    console.log(this.heap);
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

priorityQueue.display();
