class NodeVal {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  prepend(value) {
    let node = new NodeVal(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    let node = new NodeVal(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  deleteValue(value) {
    if (!this.head) {
      return false;
    } else {
      if (this.head.value == value) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      let prev = null;
      while (current && current.value !== value) {
        prev = current;
        current = current.next;
      }
      if (current) {
        prev.next = current.next;
      }
    }
  }
  deleteValueWithIndex(index) {
    if (index === 0) {
        this.head=this.head.next;
        this.head.next=this.head
    }else{
        let previous=this.head;
        for(let i=0;i<index-1;i++){
            previous=previous.next
        }
        previous=previous.next.next
    }
  }
  insertValue(idx, value) {
    let node = new NodeVal(value);
    if (idx === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }
    let previous = this.head;
    for (let i = 0; i < idx - 1; i++) {
      previous = previous.next;
    }
    node.next = previous.next;
    previous.next = node;
  }
  displayList() {
    if (!this.head) {
      console.log("Lis is empty");
    } else {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
}
const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(23);
list.prepend(32);
list.append(39);
// list.insertValue(2,243)
// list.deleteValueWithIndex(3)
list.displayList();
// list.deleteValue(243)
console.log(JSON.stringify(list));
