class TreeNode {
  value: number;
  left: any;
  right: any;
  constructor(value:number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryS_Tree {
  root: any;
  constructor() {
    this.root = null;
  }
  insertValueTree(value: number) {
    let node: TreeNode = new TreeNode(value);
    
    if (!this.root) {
      this.root = node;
      return
    } else {
      let current = this.root;
      while(current){
        if(value<current.value){
            if(current.left){
              current=current.left
            }else{
              current.left=node
            }
        }else if(value>current.value){
            if(current.right){
              current=current.right
            }else{
              current.right=node
            }
        }else{
            if(value<current.value){
                if(current.left){
                    current.left=node
                }else{
                    current=node
                }
            }else{
                if(current.right){
                    current.right=node
                }else{
                    current=node
                }
            }
            break
        }
      }
    }
  }
}

const Bst=new BinaryS_Tree()
Bst.insertValueTree(39)
Bst.insertValueTree(23)
Bst.insertValueTree(12)
console.log(JSON.stringify(Bst));
