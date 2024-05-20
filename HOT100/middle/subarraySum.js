// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
// 子数组是数组中元素的连续非空序列。
// 示例 1：
// 输入：nums = [1,1,1], k = 2
// 输出：2
// 示例 2：
// 输入：nums = [1,2,3], k = 3
// 输出：2

function subarraySum(nums, k) {
    let count = 0, sum = 0;
    // 哈希表，键为前缀和，值为出现次数
    const map = new Map([[0, 1]]);
    for (const num of nums) {
      sum += num;
      // 查询前缀和为 sum - k 的出现次数
      if (map.has(sum - k)) {
        count += map.get(sum - k);
      }
      // 将前缀和加入哈希表
      map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}
const subarraySum = (nums, k) => {
    const map = { 0: 1 };
    let prefixSum = 0;
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
      prefixSum += nums[i];
  
      if (map[prefixSum - k]) {
        count += map[prefixSum - k];
      }
  
      if (map[prefixSum]) {
        map[prefixSum]++;
      } else {
        map[prefixSum] = 1;
      }
    }
    return count;
  };
  