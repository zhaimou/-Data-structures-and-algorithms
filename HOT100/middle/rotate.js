// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

 

// 示例 1:

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
// 示例 2:

// 输入：nums = [-1,-100,3,99], k = 2
// 输出：[3,99,-1,-100]
// 解释: 
// 向右轮转 1 步: [99,-1,-100,3]
// 向右轮转 2 步: [3,99,-1,-100]

// var rotate = function(nums, k) {
//     let nums1 = [...nums]
//     for(let i = 0 ; i < k ; i++){
//         let res =  nums1.pop()
//         nums1.unshift(res)      
//     }
//     return nums1
// };
// var rotate = function(nums,key){
//     nums.unshift(...nums.splice(nums.length - k % nums.length, k))
// }
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reverse = (nums, start, end) => {
    while (start < end) {
        [nums[start++], nums[end--]] = [nums[end], nums[start]];
    }
}
function rotate(nums, k) {
    if (!nums || nums.length === 0) {
        return [];
    }
    k %= nums.length;
    if (k <= 0) {
        return nums;
    }
    reverse(nums, 0, nums.length - 1);
    console.log(nums)
    reverse(nums, 0, k - 1);
    console.log(nums)
    reverse(nums, k, nums.length - 1);
    // console.log(nums)
    return nums;
}
  let arr = [1,2,3,4,5,6]
  console.log(rotate(arr,3))
    //     let res = 1 % 3
    //   console.log(res)