
class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class Bs_Tree{
    constructor(){
        this.root=null
    }
    insertValueinTree(value){
        let node=new TreeNode(value)
        if(!this.root){
            this.root=node;
        }else{
            let current=this.root;
            while(current){
                if(value<current.value){
                    if(!current.left){
                        current.left=node
                    }else{
                        current=current.left
                    }
                }else if(value>current.value){
                    if(!current.right){
                        current.right=node
                    }else{
                        current=current.right;
                    }
                }else{
                    return
                }
            }
        }
    }
    searchValue(value){
        if(!this.root){
            return false
        }
        if(this.root.value===value){
            return true
        }
        let current=this.root
        while(current){
            // if(value<current.value){
            //     if(current.left){
            //         if(current.left.value===value){
            //             return true
            //         }
            //         current=current.left
            //     }
            // }else if(value>current.value){
            //     if(current.right){
            //         if(current.right.value===value){
            //             return true
            //         }
            //         current=current.right
            //     }
            // }
            if(current.value===value){
                return true
            }
            if(value<current.value){
                current=current.left
            }else if(value>current.value){
                current=current.right
            }
        }
        return false
    }

}
const Bst=new Bs_Tree()
Bst.insertValueinTree(10)
Bst.insertValueinTree(23)
Bst.insertValueinTree(3)
Bst.insertValueinTree(45)
console.log(Bst.searchValue(45),'hel')
console.log(JSON.stringify(Bst))