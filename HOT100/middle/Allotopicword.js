
// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
let groupAnagrams = function(strs) {
    let strLen = strs.length
    let hash = new Map()
    for(let i = 0 ; i < strLen; i++){
        let str = strs[i].split('').sort().join()
        if(hash.has(str)){
            let temp = hash.get(str)
            temp.push(strs[i])
            hash.set(str,temp) 
        }else{
            hash.set(str,[strs[i]])
        }
    }
    return [...hash.values()]

};
let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(arr))