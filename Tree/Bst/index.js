const treefy = require("treeify");
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insertValue(value) {
    let node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    } else {
      let current = this.root;
      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = node;
          } else {
            current = current.right;
          }
        } else {
          return;
        }
      }
    }
  }
  searchValue(value) {
    if (this.root.value === value) {
      return true;
    }
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  deleteNode(value) {
    if (!this.root || !value) {
      return;
    }
    this.root = this.#deleteHelper(this.root, value);
  }
  #deleteHelper(root, deleteNode) {
    if (!root) {
      return root;
    }
    let current = root;
    let parent = null;
    while (current) {
      if (deleteNode < current.value) {
        parent = current;
        current = current.left;
      } else if (deleteNode > current.value) {
        parent = current;
        current = current.right;
      } else {
        break;
      }
    }
    if (!current) {
      return root;
    }

    // Node with only one child or no child

    if (!current.left) {
      if (!parent) {
        // Node to be deleted is the root
        return current.right;
      } else if (current === parent.left) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else if (!current.right) {
      if (!parent) {
        return current.left;
      } else if (current === parent.left) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else {
      // Node with two children
      //Find minimum value of right subtree
      const successor = this.#findMinimumNode(current.right);
      // Replace the node's value with the successor's value
      current.value = successor.value;

      // Recursively delete the successor node
      current.right = this.#deleteHelper(current.right, successor.value);
    }
    return root;
  }
  removeNodeFromTree(value) {
    this.#removeHelper(this.root, value);
  }
  #removeHelper(root, value) {
    if (!root) {
      return root;
    }
    if(value<root.value){
      root.left=this.#removeHelper(root.left,value)
    }else if(value>root.value){
      root.right=this.#removeHelper(root.right,value)
    }else{
      if(!root.left && !root.right){
        return null
      }
      if(!root.left){
        return root.right
      }else if(!root.right){
        return root.left
      }

      root.value=this.#findMinimumNode(this.root.right).value
      root.right=this.#removeHelper(root.right,root.value)
    }
    return root
  }
  #findMinimumNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
  diplayTreeInPreOrder() {
    this.#preOrder(this.root);
  }
  displayInOrder() {
    this.#inOrder(this.root);
  }
  displayPostOrder() {
    this.#postOrder(this.root);
  }
  leverOrderTraversal() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      console.log(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  getMinimumValueInTree() {
    let current = this.root;
    if (!current.left) {
      return current.value;
    } else {
      while (current) {
        if (current.left) {
          current = current.left;
        } else {
          return current.value;
        }
      }
    }
  }
  getMaximumValueInTree() {
    let current = this.root;
    if (!current.right) {
      return current.value;
    } else {
      while (current) {
        if (current.right) {
          current = current.right;
        } else {
          return current.value;
        }
      }
    }
  }
  deleteValue(value) {
    this.#deleteNode(this.root, value);
  }
  #deleteNode(root, value) {
    if (!root) {
      return null;
    }
    if (value < root.value) {
      root = this.#deleteNode(root.left, value);
    } else if (value > root.value) {
      root = this.#deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.right;
      }
    }
  }
  //   #getMinimumNodeofTree(root) {
  //     if()
  //   }
  #preOrder(root) {
    if (root) {
      console.log(root.value);
      this.#preOrder(root.left);
      this.#preOrder(root.right);
    }
  }
  #inOrder(root) {
    if (root) {
      this.#inOrder(root.left);
      console.log(root.value);
      this.#inOrder(root.right);
    }
  }
  #postOrder(root) {
    if (root) {
      this.#postOrder(root.left);
      this.#postOrder(root.right);
      console.log(root.value);
    }
  }
}
const Bst = new BinarySearchTree();
// Bst.insertValue(29);
// Bst.insertValue(10);
// Bst.insertValue(34);
// Bst.insertValue(78);
// Bst.insertValue(12);
// Bst.insertValue(67);
// Bst.insertValue(32);
// Bst.insertValue(26);
// Bst.insertValue(56);
// Bst.insertValue(10);
Bst.insertValue(10);
Bst.insertValue(15);
Bst.insertValue(5);
Bst.insertValue(3);
Bst.removeNodeFromTree(10);
console.log(`_Minmimu❤_Value_In_Tree_______${Bst.getMinimumValueInTree()}`);
console.log(`_Maximum🚈_Value_In_Tree_______${Bst.getMaximumValueInTree()}`);

console.log(treefy.asTree(Bst, true));
console.log(JSON.stringify(Bst));
console.log(`____________________pre order`);
Bst.diplayTreeInPreOrder();
console.log(`___________________in order`);
Bst.displayInOrder();
console.log(`___________________post order`);
Bst.displayPostOrder();
console.log(`
           ______________________________________________________________
`);
Bst.leverOrderTraversal();
