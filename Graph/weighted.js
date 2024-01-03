class WeightedGraph {
  constructor() {
    this.adjList = {};
  }
  addVertexorNode(vertex) {
    // add node
    this.adjList[vertex] = [];
  }
  addEdge(fromVertex, toVertex, weight) {
    // adding that connection
    this.adjList[fromVertex].push({ toVertex, weight });
    this.adjList[toVertex].push({ fromVertex, weight });
  }

  printGraph() {
    for (let vertex in this.adjList) {
      console.log(
        `${vertex} -> ${this.adjList[vertex].map(
          (val) => `${val.fromVertex || val.toVertex}(${val.weight})`
        )}`
      );
    }
  }
}
const grph = new WeightedGraph();
grph.addVertexorNode("A");
grph.addVertexorNode("B");
grph.addVertexorNode("C");
grph.addVertexorNode("D");

grph.addEdge("A", "B", 4);
grph.addEdge("A", "C", 2);
grph.addEdge("B", "C", 5);
grph.addEdge("B", "D", 10);
grph.addEdge("C", "D", 3);
grph.printGraph();
