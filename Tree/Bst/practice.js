var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinaryS_Tree = /** @class */ (function () {
    function BinaryS_Tree() {
        this.root = null;
    }
    BinaryS_Tree.prototype.insertValueTree = function (value) {
        var node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        else {
            var current = this.root;
            while (current) {
                if (value < current.value) {
                    if (current.left) {
                        current = current.left;
                    }
                    else {
                        current.left = node;
                    }
                }
                else if (value > current.value) {
                    if (current.right) {
                        current = current.right;
                    }
                    else {
                        current.right = node;
                    }
                }
                else {
                    if (value < current.value) {
                        if (current.left) {
                            current.left = node;
                        }
                        else {
                            current = node;
                        }
                    }
                    else {
                        if (current.right) {
                            current.right = node;
                        }
                        else {
                            current = node;
                        }
                    }
                    break;
                }
            }
        }
    };
    return BinaryS_Tree;
}());
var Bst = new BinaryS_Tree();
Bst.insertValueTree(39);
Bst.insertValueTree(23);
Bst.insertValueTree(12);
console.log(JSON.stringify(Bst));
