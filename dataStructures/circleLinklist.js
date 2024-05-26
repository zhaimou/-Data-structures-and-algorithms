class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class circleLinklist {
    constructor(){
        this.head = null
        this.length = 0;
    }
    push(val){
      let node= new Node(val)
        if(this.length === 0){
            this.head = node 
        }else{
          let current =  getNodeAt(this.size()-1)
          current.next = node
        }
        node.next = this.head
        this.length++
    }
    insert(val,index){
        if(index>=0&& index<=this.count){
            const node = new Node(val)
            let current = this.head
            if(index === 0){
                if(this.head === null){
                    this.hand = node
                    node.next = this.head 
                }else{
                    node.next = current
                    //获取最后一个元素
                    current = this.getNodeAt(this.size() - 1)
                    this.head = node
                    current.next = this.head
                }
            }else{
                const previous = this.getNodeAt(index -1)
                node.next = previous.next
                previous.next = node
            }
            this.length++
            return true
        }
        return false
    }
    removeAt(index){
        if(index >= 0 && index< this.length){
            let current = this.head
            if(index === 0){
                if(this.size() === 1){
                    this.head = undefined
                }else{
                    let last = this.getNodeat(this.size() -1)
                    this.head = this.head.next
                    last.next = this.head
                }

            }else{
                const previous = this.getNodeAt(index -1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current.val
        }
    }
    size(){
        return this.length
    }

}