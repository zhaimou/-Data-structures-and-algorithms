function twoSum(nums, target) {
    let obj = new Map();
    // 遍历数组，寻找目标和
    for (let i = 0; i < nums.length; i++) {
        // 计算需要的另一个值
        const complement = target - nums[i];
        // 如果哈希表中有这个值，返回两个索引
        if (obj.has(complement)) {
            return [obj.get(complement), i]; // 返回两个索引
        }
        // 否则，将当前值和索引存入哈希表
        obj.set(nums[i], i);
    }
    return [];
}