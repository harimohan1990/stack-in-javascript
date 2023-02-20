class Stack {
    //Array is used to implement stack

    constructor(){
        this.items = [];
    }
   // functioned to be implement
   //push(item) --> add an element to the stack

   push(element){
     this.items.push(element);
   }

 pop(){
    if(this.items.length==0)
        return "Underflow"
       
    return this.items.pop(); 
 }

 peek(){
    return this.items[this.items.length-1]
 }
 isEmpty(){
    return this.items.length ==0;
 }

 printStack(){
    var str ="";
    for(var i=0;i<this.items.length;i++){
        str+=this.items[i] + "";
        return str;
    }
 }

 
   //popitem
   //peek
   //isEmpty()

}

var stack = new Stack()

console.log(stack.isEmpty());

console.log(stack.pop());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack())

console.log(stack.pop())
console.log(stack.printStack());