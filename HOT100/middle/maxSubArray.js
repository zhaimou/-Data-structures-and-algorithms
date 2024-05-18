// 最大子数组和
// 中等难度
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组
// 是数组中的一个连续部分。
// 示例 1：
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：
// 输入：nums = [1]
// 输出：1
// 示例 3：
// 输入：nums = [5,4,-1,7,8]
// 输出：23

function maxSubarraySum(nums) {
        if(nums.length === 1) return  nums[0]
        let maxSum = nums[0];  // 定义一个变量 maxSum 来存储当前最大子序和，初始值设为数组的第一个元素值。
        let currentSum = nums[0];  // 定义一个变量 currentSum 来存储当前的子序和，初始值也为数组的第一个元素值。
        for (let i = 1; i < nums.length; i++) {  // 从数组的第二个元素开始遍历
          currentSum = Math.max(nums[i], currentSum + nums[i]);  // 计算当前元素值与当前元素值加上 currentSum 的较大值，更新 currentSum。
          maxSum = Math.max(maxSum, currentSum);  // 比较 currentSum 与 maxSum，取较大值更新 maxSum。
        }
        
       return maxSum;  // 遍历完整个数组后，maxSum 即为最大子序和。
 }
