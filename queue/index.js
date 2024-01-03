class Queue{
    constructor(){
        this.queue=[]
    }
    enqueue(value){
        this.queue.push(value)
    }
    dequeue(){
        if(this.isEmpty()){
            return "cannot perform"
        }
        this.queue.shift()
    }
    front(){
        if(this.isEmpty()){
            return "queue is EMpty"
        }
        return this.queue[0]
    }
    isEmpty(){
        return this.queue.length===0
    }
}
const queue=new Queue()
queue.enqueue(19)
queue.enqueue(13)
queue.enqueue(12)
queue.dequeue()
console.log(queue.queue)