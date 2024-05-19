
// 238. 除自身以外数组的乘积
// 中等
// 相关标签
// 相关企业
// 提示
// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

// 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

 
// 示例 1:
// 输入: nums = [1,2,3,4]
// 输出: [24,12,8,6]
// 示例 2:
// 输入: nums = [-1,1,0,-3,3]
// 输出: [0,0,9,0,0]
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length).fill(1)
    let prefix = 1;
    for (let i = 1; i < nums.length; i++) {
        prefix = nums[i -1] * prefix
        answer[i] *= prefix
    }
    let suffix = 1;
    for(let i = nums.length -2; i >= 0; i--){
        suffix = nums[i + 1] *suffix
        answer[i] *= suffix
    }
    return answer 
};
// var productExceptSelf = function(nums) {
//     let n = nums.length;
//     let output = new Array(n).fill(1); // 初始化output数组为1
//     let left = 1; // 记录i左边元素的乘积
//     for (let i = 1; i < n; i++) { // 从左到右遍历，计算i左边元素的乘积
//         left *= nums[i - 1];
//         output[i] *= left;
//     }
    
//     let right = 1; // 记录i右边元素的乘积
//     for (let i = n - 2; i >= 0; i--) { // 从右到左遍历，计算i右边元素的乘积
//         right *= nums[i + 1];
//         output[i] *= right;
//     }
    
//     return output;
// };
console.log(productExceptSelf([1,23,2]))