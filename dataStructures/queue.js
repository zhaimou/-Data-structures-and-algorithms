// class queue{
//         _item = [];
//         dequeue(val){
//             this._item.push(val)
//         }
//         enqueue(){
//             return this._item.shift()
//         }
//         peek(){
//             return this._item.at(0)
//         }
//         isEmpty(){
//             return this._item.length === 0
//         }
//         size(){
//             return this._item.length
//         }
//         clear(){
//             this._item = []
//         }
//         toString(){
//             return this._item.join("")
//         }
    
// }
// 更高效的实现方式
class queue{
    _item = {};
    _headCount = 0; 
    count = 0;
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        let res  = this._item[this._headCount]
        delete this._item[this._headCount]
        this._headCount++
        return res 
    }
    enqueue(val){
        this._item[this.count] = val
        this.count++;
    }
    front(){
        return this._item[this._headCount]
    }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.count - this._headCount 
    }
    clear(){
        this._item = {}
        this.count = 0
        this._headCount = 0; 
    }
    toString(){
        let str =''
        for(let i = this._headCount; i< this.count; i++){
            str += `${this._item[i]}`
        }
        return str
    }
}


function game(arr,num){
    let queueGame = new queue()
    for (let i= 0; i< arr.length; i++){
        queueGame.enqueue(arr[i])
    }   
    while(queueGame.size() > 1){
        for (let i= 0; i< num; i++) {
            queueGame.enqueue(queueGame.dequeue())
        }
        queueGame.dequeue()
    }
    return queueGame.dequeue()
}

let arr = [1,2,3,4,5]
console.log(game(arr,7))