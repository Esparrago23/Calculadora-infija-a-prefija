
import { Node } from "./Node.mjs"

export class LinkedList {
    #count
    #head
    
    
    constructor(){
        this.#count = 0
        this.#head = undefined
        
    }

    push(item)
    {
      const node = new Node(item)
      
    if (this.#head == null) {
        this.#head = node
    } else {

	  node.next=this.#head
	  this.#head=node
      let current= this.#head;
  }
  this.#count++
}



pop()
  {
       
    if (!this.#head) return null;
    
    const value = this.#head.getData();

    this.#head = this.#head.next
    this.#count--
  
    
    return value;
  }
  peek(){
    let current=this.#head.getData()
      return current
}

printList(){  
  let current= this.#head;
  let print
  for(let i=0;i<=this.size()&&current !== undefined;i++){
    console.log(current.getData())
    print =current.getData()
    current =current.next;
    
 }
}

print(){
    let current= this.#head;

    for (let i=0;i<this.#count;i++){
        console.log(current.getData());
    }
}


    
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.#count
    }
   
}
