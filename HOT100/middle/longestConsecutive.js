// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

// 示例 1：

// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
// 示例 2：

// 输入：nums = [0,3,7,2,5,8,4,6,0,1]
// 输出：9
//  最长连续序列
// var longestConsecutive = function (nums) {
//     if(nums.length === 0){
//         return 0;
//     }
//     nums.sort((a, b) => a - b);
//     let maxL = 1, curL = 1, curN = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === curN) {
//             continue;
//         }
//         if (nums[i] - curN === 1) {
//             curL++;
//         } else {
//             maxL = Math.max(maxL, curL);
//             curL = 1;
//         }
//         curN = nums[i];
//     }
//     return Math.max(maxL, curL);
// };

let fn = function(nums){
    if(nums.length === 0){
        return 0
    }
    nums.sort((a,b)=>a-b)
    let curN=nums[0] 
    let curL = 1; 
    for(let i =1;i<nums.length;i++){
        if(nums[i] === curN){
            continue
        }
        if(nums[i] - curN === 1){
            curL++
        }else{
            maxL = Math.max(maxL, curL); // 更新最长连续序列的长度
            curL = 1; // 重置当前连续序列的长度
        }
        curN = nums[i]
    }
    return maxL > curL ? maxL : curL
}
