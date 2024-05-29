const Compare = {
    less: -1,
    bigger: 1,
    equ:0
}
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    insert(val){
        if(this.root === null){
            this.root = new Node(val)
        }else{
            this.insertNode(this.root,val)
        }
    }
    insertNode(node,val){
        if(this.compareFn(val,node.val) ===Compare.less){
            if(node.left === null){
                node.left = new Node(val)
            }else{
                this.insertNode(node.left,val)
            }
        }else{
            if(node.right === null){
                node.right = new Node(val)
            }else{
                this.insertNode(node.right,val)
            }
        }

    }
    compareFn(a,b){
        if(a ===b){
            return Compare.equ
        }
        return a <b ? Compare.less : Compare.bigger
    }
    inOrderMap(callback){
        // this.inOrderMapNode(this.root,callback)
        this.preOrderMapNode(this.root,callback)
        // this.postOrderMapNode(this.root,callback)
    }
    //中序遍历
    inOrderMapNode(node,callback){
        if(node!=null){
            this.inOrderMapNode(node.left,callback)
            callback(node.val)
            this.inOrderMapNode(node.right,callback)
        }
    }
    //先序遍历
    preOrderMapNode(node,callback){
        if(node!=null){
            callback(node.val)
            this.preOrderMapNode(node.left,callback)
            this.preOrderMapNode(node.right,callback)
        }
    }
    //后序遍历
    postOrderMapNode(node,callback){
            callback(node.val)
            this.postOrderMapNode(node.left,callback)
            this.postOrderMapNode(node.right,callback)
    }
    //最小子节点
    minNode(){
        let current = this.root
        while(current != null && current.left !=null){
                current = current.left
        }
        return current.val
    }   
    maxNode(){
        let current = this.root
        while(current != null && current.right!=null){
                current = current.right
        }
        return current.val
    }
    search(val){
        return this.searchNode(this.root,val)
    }
    searchNode(node,val){
        if(node === null){
            return false
        }
        if(this.compareFn(val,node.val) === Compare.less){
            return this.searchNode(node.left,val)
        }else if(this.compareFn(val,node.val) === Compare.bigger){

            return this.searchNode(node.right,val)
        }else{
            return true
        }
    }
}

 let myTree = new BST()
 myTree.insert(100)
 myTree.insert(110)
 myTree.insert(80)
 myTree.insert(90)
 myTree.insert(70)
 console.log(myTree)
 myTree.inOrderMap((val) => {
    console.log(val)
 })