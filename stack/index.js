class Stack{
    constructor(){
        this.stack=[]
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return "cannot perform pop"
        }
        this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.stack[this.stack.length-1]
    }
    displayStack(){
        console.log(this.stack);
    }
    isEmpty(){
        return this.stack.length===0
    }
}
const stack=new Stack()
stack.push(19)
stack.push(14)
stack.push(123)
stack.reverse()
console.log('Peek '+stack.peek());
stack.displayStack()