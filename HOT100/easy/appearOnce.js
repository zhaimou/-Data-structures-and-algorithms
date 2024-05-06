function appearOnce(nums){
    let obj = new Map()
    for(let num of nums){
        obj.set(num,obj.get(num)||0 + 1)
    }
    for (const [key, value] of obj.entries()) {
        if (value === 1) {
            return key; // 频率为1的元素就是只出现一次的元素
        }
    }
    return null 
}
