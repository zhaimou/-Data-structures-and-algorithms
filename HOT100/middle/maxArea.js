// 盛最多水的容器
// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
// 示例 2：

// 输入：height = [1,1]
// 输出：1
// 说明：你不能倾斜容器。
//思路; 左右指针分别指向数组的左右两端，它们可以容纳的水量为 
// 面积需要由短的一段高度决定 * 右指针-左指针长度决定 也就是短边* 宽
// 比如min⁡(1,7)∗8=8\min(1, 7) * 8 = 8min(1,7)∗8=8
// 两指针对比 短的那边向前推进 相同则随便 
var maxArea = function(height) {
    if (!height.length) return 0;
    let l = 0;
    let r = height.length - 1;
    let maxArea = 0;
    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l);
        maxArea = Math.max(maxArea, area);
        height[l] <= height[r] ? l++ : r--;
    }
   
    return maxArea;
};
