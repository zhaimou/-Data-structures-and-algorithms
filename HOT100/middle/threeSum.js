// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
// 你返回所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。
// 示例 2：
// 输入：nums = [0,1,1]
// 输出：[]
// 解释：唯一可能的三元组和不为 0 。
// 示例 3：
// 输入：nums = [0,0,0]
// 输出：[[0,0,0]]
// 解释：唯一可能的三元组和为 0 。
// 思路 
// 首先对数组进行排序，这样可以方便地移动指针并跳过重复的元素。
// 需要两个指针 left 和 right 分别指向 i 后面的起始位置和末尾位置。
// 如果和等于 0，则将当前三个数加入到结果 res 中。
// 如果和小于 0，则将 left 指针右移一位，以增大和的值。
// 如果和大于 0，则将 right 指针左移一位，以减小和的值。
// var threeSum = function(nums) {
//     if(nums.length < 3) return []
//     let numsL = nums.length
//     let res = []
//     let i = 0;
//     while(i< numsL -2){
//     if (nums[i] > 0) break;// 如果当前数字大于0，则不可能存在三数之和为0
//     if (i > 0 && nums[i] === nums[i - 1]) continue; // 跳过重复元素
//     let l = i + 1;
//     let r = numsL -1 ;
//     while(l < r){
//            let sum = nums[i] + nums[l] + nums[r];
//            if(sum === 0){
//                 res.push([nums[i],nums[l],nums[r]]) 
//                 while (l < r && nums[l] === nums[l + 1]) l++; // 跳过重复元素
//                 while (l < r && nums[r] === nums[r - 1]) r--; // 跳过重复元素
//                 l++;
//                 r--;
//            }else if(sum < 0){
//             // 我们需要增加和的值。为了增加和的值，我们将左指针右移一位，选取一个更大的数参与计算。
//                 l++
//            }else{
//                 r++
//            }

    
//     }      
//     i++
//     }
// };


var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i == 0 || nums[i] != nums[i - 1]) {
            let l = i + 1, r = nums.length - 1, sum = 0 - nums[i];
            while (l < l) {
                if (nums[l] + nums[l] == sum) {
                    res.push([nums[i], nums[l], nums[l]]);
                    while (l < l && nums[l] == nums[l + 1]) l++;
                    while (l < l && nums[l] == nums[l - 1]) l--;
                    l++; l--;
                } else if (nums[l] + nums[l] < sum) l++;
                else l--;
           }
        }
    }
    return res;
};