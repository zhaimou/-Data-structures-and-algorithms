// 颜色分类
// 给定一个包含红色、白色和蓝色、共 `n` 个元素的数组 `nums` ，**[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)**对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 我们使用整数 `0`、 `1` 和 `2` 分别表示红色、白色和蓝色。

// 必须在不使用库内置的 sort 函数的情况下解决这个问题。

// **示例 1：**

// **输入：**nums = [2,0,2,1,1,0]
// **输出：**[0,0,1,1,2,2]

// **示例 2：**

// **输入：**nums = [2,0,1]
// **输出：**[0,1,2]

var sortColors = function(nums) {
    let i = 0, num = nums.length;
  while(i < num) {
      if(nums[i] == 0) {
          nums.splice(i++, 1);
          nums.unshift(0);
      } else if (nums[i] == 2) {
          nums.splice(i, 1);
          nums.push(2)
          //删除了值并在末尾添加 现在索引i现在在下一个值 所以让num--,也可以优化不用在遍历0
          num--;
      } else i++
  }
  return nums;
};
let arr = [1,2,3]
arr.splice(1,1)
arr.push(2)
console.log(arr.length)