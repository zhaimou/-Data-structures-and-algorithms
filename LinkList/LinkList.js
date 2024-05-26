class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(val) {
    let node = new Node(val);
    if (this.head) {
      let p = this.head;
      while (p.next) {
        p = p.next;
      }
      p.next = node;
      //   val.next = this.hand;
    } else {
      this.head = node;
    }
    this.length++;
  }
  removeAt(index){
    if(index > 0 && index < this.length){
        let pre; 
        let current = this.head
        if(index === 0){
            this.head = this.head.next
        }
        for(let i=0 ;i < index;i++){
            pre = current 
           current = current.next
        }
        pre.next = current.next
        this.length--
        return current.val
    }

  }
  getNodeAt(index){
    if(index >= 0 && index <this.length){
        let node = this.head
        for (let i= 0; i< index; i++) {
            node = node.next
        }
        return node.val
    }
   return  
  }
  remove(element){
    let current;
    for (let i= 0; i< this.length; i++) {
        if(element === this.getNodeAt(index)){
            return i
        }
        current = current.next
    }
    return -1 
  }
  insert(element,index){
    if(index >=0 && index< this.length){
        let node = new Node(element) 
        if(index  === 0){
           let cur = this.head 
           this.head = node  
           node.next = cur
        }else{
            for(let i = 0 ;i < this.length; i++){
                let pre = getNodeAt(index -1)
                let cur = pre.next
                node.next = cur
                pre.next = node
            }
        }
        this.length--
        return true

    }
    return false
  }
  isEmpty(){
    return this.length === 0
  }
  size(){
    return this.length 
  }
  getHead(){
    return this.head
  }
  print() {
    let p = this.head;
    let str = "";
    if (p) {
      do {
        str += p.val + " -> ";
        p = p.next;
      } while (p.next);
      {
        str += p.val;
        console.log(str);
      }
    } else {
      console.log("空链表");
    }
  }
}

let linklist = new LinkList();

linklist.append(1);
linklist.append(2);
linklist.append(3);
linklist.append(4);

// console.log(linklist.length);
// console.log(linklist.print());
let removeElements = function (head, val) {
  if (head == null) return null;

  head.next = removeElements(head.next, val);

  return head.val === val ? head.next : head; //递归
};
console.log(removeElements(linklist.head, 3));
