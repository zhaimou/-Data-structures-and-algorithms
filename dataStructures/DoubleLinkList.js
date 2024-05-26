// 双向链表

// 节点除了存储数据外，还有两个指针分别指向前一个节点地址（前驱指针prev）和下一个节点地址（后继指next）。
class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}
class NodeList{
    constructor() {
        this.head = null;
        this.tail =null;
        this.length = 0;
      }
    push(val){
       let node = new Node(val)
       if(this.head === null){
            this.head = node
            this.tail = node
       }else{
           this.tail.next = node
           node.prev = this.tail
           this.tail = node
       }
       this.length++
    }
    insert(val,index){
        if(index >= 0 && index <= this.length){
            let node = new Node(val)
            let current= this.head
            if(index === 0){
                if(this.head === null){
                        this.head = node
                        this.tail = node
                }else{
                    node.next = this.head
                    this.head.prev = node
                    this.head = node 
                }

            }else if(index === this.length){
                current = this.tail
                current.next  = node 
                node.prev  = current
                this.tail = node
            }else{
                const previous = this.getNodeAt(index -1)
                current = previous.next 
                node.next = current  
                current.prev = node
                previous.next= node
                node.prev= prev
            }
            this.length++
            return true
        }
    }
    removeAt(index){
    if(index >= 0 && index <= this.length){
        let current = this.head
        if(index === 0){
            this.head = current.next
            if(this.length === 1){
                this.tail = null
            }else{
                this.head.prev = null
            }
        }else if(index ===this.length - 1){
            current = this.tail
            this.tail =current.prev
            this.tail.next = null
        }else{
            let  previous = this.getNodeAt(index -1)
            current  = previous.next
            previous.next = current.next
            current.next.prev = previous
        }
        this.length--;
        return current.element
    }
    }

}