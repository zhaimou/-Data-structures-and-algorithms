class Stack{
    _item = [];
    push(val){
        this._item.push(val)
    }
    pop(){
        return this._item.pop()
    }
    peek(){
        return this._item.at(-1)
    }
    isEmpty(){
        return this._item.length === 0
    }
    size(){
        return this._item.length
    }
    clear(){
        this._item = []
    }
    toString(){
        return this._item.join("")
    }

}
 
let stack = new Stack()
//我们可以根据栈的后进先出思想 来做出进制转换
function convert(decNumber,base){
    let stackStore = new Stack() 
    let str = ''
    let number = decNumber
    let baseString = '0123456789ABCDEF'
    while(number > 0){
        stackStore.push(number% base)
        number = Math.floor(number/base)
    }
    while(!stackStore.isEmpty()){
         str += baseString[stackStore.pop()]
    }
    return str
}

// console.log(convert(14,16))