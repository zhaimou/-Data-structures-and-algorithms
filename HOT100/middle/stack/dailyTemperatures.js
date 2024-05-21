
// 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 示例 1:

// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
// 示例 2:

// 输入: temperatures = [30,40,50,60]
// 输出: [1,1,1,0]
// 示例 3:

// 输入: temperatures = [30,60,90]
// 输出: [1,1,0]
// var dailyTemperatures = function(temperatures) {
//      let arr  = new Array(temperatures.length-1).fill(0)
//      let stack = []
//     for(let i = 0; i<temperatures.length; i++){
//         if(){

//         }
//     }

//     return arr
// };
var dailyTemperatures = function(temperatures) {

    const result = new Array(temperatures.length).fill(0); // 初始化结果数组，全部填充为0  
    const stack = []; // 创建一个栈，用于存储温度数组索引  
  
    for (let i = 0; i < temperatures.length; i++) {  
        // 当栈不为空且当前温度高于栈顶元素对应的温度时  
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {  
            // 弹出栈顶元素，并计算等待天数  
            const index = stack.pop();  
            result[index] = i - index;  
        }  
        // 将当前温度索引压入栈中  
        stack.push(i);  
    }  
  
    return result; 
};