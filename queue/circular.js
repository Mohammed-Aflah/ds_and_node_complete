var MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};
/** 

 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.queue.length === this.size) return false;
  this.queue.push(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.queue.length === 0) return false;
  this.queue.shift();
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[0];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.queue.length === this.size;
};

// Your MyCircularQueue object will be instantiated and called as such:
var obj = new MyCircularQueue(3);
var param_1 = obj.enQueue(1);
var param_2 = obj.deQueue();
var param_3 = obj.Front();
var param_4 = obj.Rear();
var param_5 = obj.isEmpty();
var param_6 = obj.isFull();
console.log(param_1);
console.log(param_2);
console.log(param_3);
console.log(param_4);
console.log(param_5);
console.log(param_6);
//  */
