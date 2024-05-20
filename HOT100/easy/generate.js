// 杨辉三角
// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
// 示例 1:
// 输入: numRows = 5
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// 示例 2:
// 输入: numRows = 1
// 输出: [[1]]
var generate = function(numRows) {
    if(numRows === 1){
        return [[1]]
    }
    if(numRows === 2){
        return [[1],[1,1]]
    }
    let triangle = [];
    for (let i = 0; i < numRows; i++) {
        triangle[i] = new Array(i + 1);
        triangle[i][0] = 1; // 每行的第一列为1
        triangle[i][i] = 1; // 每行的最后一列为1
        
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }
    
    return triangle;

};