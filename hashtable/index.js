class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = {};
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) + key.charCodeAt(i);
      hash = hash & hash; // convert to 32-bit int
      hash = Math.abs(hash);
    }
    return hash % this.size;
  }
  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      for (const entry of bucket) {
        if (entry.key == key) {
          return entry.value;
        }
      }
    }
    return false;
  }
}

const hashTb=new HashTable()
hashTb.insert("name","Aflu")
hashTb.insert("age",23)
console.log(hashTb.get("name"));
console.log(hashTb.table);