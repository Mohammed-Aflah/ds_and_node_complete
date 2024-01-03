class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insert(word){ //inserting word in trie
        let node=this.root
        for(const char of word){
            if(!node.children.has(char)){
                node.children.set(char,new TrieNode())
            }
            node=node.children.get(char)
        }
        node.isEndOfWord=true
    }
    search(word){
        let node=this.root
        for(const char of word){
            if(!node.children.has(char)){
                return false
            }
            node=node.children.get(char)
        }
        return node.isEndOfWord
    }
    display(node = this.root, level = 0) {
        for (const [char, child] of node.children) {
          console.log(`${'  '.repeat(level)}${char}`);
          this.display(child, level + 1);
        }
      }
    // Check if word prefix exists in the trie
    // startsWith(prefix){
    //     let node=this.root
    // }
}
const trie=new Trie()
trie.insert("apple")
console.log(trie.search("apple"));
trie.display()
