// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
// 示例 1：
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2：
// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
// 思路:当我们需要合并区间时，我们可以遍历给定的区间数组，并通过比较相邻的区间来判断它们是否有重叠。
// 如果存在重叠，我们将这两个区间合并成一个新的区间，并继续进行下一轮的比较；如果不存在重叠，我们将当前区间加入结果数组，并继续处理下一个区间。
// 新区间的起始位置为当前区间的起始位置，结束位置为两个区间结束位置的较大值。
// 合并后的区间放入下一个位置
// var merge = function(intervals) {

//     let len = intervals.length 
//     let res = []
//     for(let i = 0;i<len -1 ;i++){
//         if(intervals[i][1]> intervals[i+1][0]){
//             res.push([intervals[i][0],intervals[i+1][1]])

//         }else{
//             if(intervals[i][1]> intervals[i+1][0]){
//                 res.push(intervals[i])
//             }
           
//         }
//     }
//     return res
// };

var merge = function(intervals) {
    let len = intervals.length;
    let res = [];
    intervals.sort((a, b) => a[0] - b[0]); // 先按照起始位置排序
    for (let i = 0; i < len; i++) {
        if (i < len - 1 && intervals[i][1] >= intervals[i + 1][0]) {
            let mergedInterval = [intervals[i][0], Math.max(intervals[i][1], intervals[i + 1][1])];
            intervals[i + 1] = mergedInterval; // 合并后的区间放入下一个位置
        } else {
            res.push(intervals[i]); // 无法合并时，将当前区间加入结果数组
        }
    }
    return res;
};


var merge = function(intervals) {
    let len = intervals.length;
    let res = [];
    intervals.sort((a, b) => a[0] - b[0]); // 先按照起始位置排序
    let i = 0;
    while (i < len) {
        let currInterval = intervals[i];
        let j = i + 1;
        while (j < len && intervals[j][0] <= currInterval[1]) {
            currInterval[1] = Math.max(currInterval[1], intervals[j][1]); // 更新结束位置
            j++;
        }
        res.push(currInterval);
        i = j;
    }
    return res;
};