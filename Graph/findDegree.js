class Graph{
    constructor(){
        this.graph={}
    }
    addVertex(vertex){
        this.graph[vertex]=[]
    }
    addEdge(vertex1,vertex2){
        if(!this.graph[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.graph[vertex2]){
            this.addVertex(vertex2)
        }
        this.graph[vertex1].push(vertex2)
        this.graph[vertex2].push(vertex1)
    }
    findDegree(vertex){
        if(this.graph[vertex]){
            console.log(this.graph[vertex]);
            return this.graph[vertex].length
        }else{
            return 0
        }
    }
}
const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("A","C")
console.log(graph.findDegree("B"));