let map =new Map()
map.set('a',1)
map.set('b',2)
map.set('c',3)
console.log(map.keys().next().value)
console.log(map.get('b'))
// console.log(map.)
// 1=>2=>3=>4
var LRUCache = function(capacity){
    this.cache = new Map()
    this.max = capacity
}


// 取到数据时删除数据并新加到前面
LRUCache.prototype.get = function(key){
    if(this.cache.has(key)){
        let temp = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key,temp)
        return temp
    }   
    return -1
}

LRUCache.prototype.put = function(key,value){
    if(this.cache.has(key)){
        this.cache.delete(key)
    }else if(this.cache.size>=this.max){
        //新增就要有缓存的淘汰机制
        this.cache.delete(this.cache.keys().next().value)
    }
      this.cache.set(value)
}