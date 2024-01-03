class Graph {
  constructor() {
    this.adjantcyList = {};
  }
  addVertex(vertex) {
    if (!this.adjantcyList[vertex]) {
      this.adjantcyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjantcyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjantcyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjantcyList[vertex1].add(vertex2);
    this.adjantcyList[vertex2].add(vertex1);
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjantcyList[vertex1].has(vertex2) &&
      this.adjantcyList[vertex2].has(vertex1)
    );
  }
  removeEdge(vertex1,vertex2){
    // new Set().delete
    this.adjantcyList[vertex1].delete(vertex2)
    this.adjantcyList[vertex2].delete(vertex1)
  }
  bfs(startNode){
    if(startNode==undefined){
      return "start node is required"
    }
    const visited=new Set()
    const queue=[startNode]

    while(queue.length){
      const currentNode=queue.shift()
      if(!visited.has(currentNode)){
        console.log(currentNode);
        visited.add(currentNode)

        for(const neighbour of this.adjantcyList[currentNode]){
          if(!visited.has(neighbour)){
            queue.push(neighbour)
          }
        }
      }
    }
  }
  dfs(startNode){
    const visted=new Set()

    const dfsHeloper=(node)=>{
      console.log(node);
      visted.add(node)

      for(const neighbour of this.adjantcyList[node]){
        if(!visted.has(neighbour)){
          dfsHeloper(neighbour)
        }
      }
    }
    dfsHeloper(startNode)
  }
  removeVertex(vertex){
    if(!this.adjantcyList[vertex]){
      return
    }
    for(let edge of this.adjantcyList[vertex]){
      this.removeEdge(vertex,edge)
    }
    delete this.adjantcyList[vertex]
  }
  displayGraph() {
    for (let vertex in this.adjantcyList) {
      console.log(`${vertex} -> ${[...this.adjantcyList[vertex]]}`);
    }
  }
}
const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.displayGraph();
console.log(graph.hasEdge(1,3));
 graph.displayGraph()
 graph.removeVertex("B")
 console.log(`  -- after remove --- `);
 graph.displayGraph()
 console.log('_______');
 graph.dfs(0)