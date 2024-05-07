// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
// 示例 1：
// 输入：s = "()"
// 输出：true
// 示例 2：
// 输入：s = "()[]{}"
// 输出：true
// 示例 3：
// 输入：s = "(]"
// 输出：false

const map = {
    ')': '(',
    '}': '{',
    ']': '['
};
const stack = [];
for (let c of s) {
    if (map[c]) { // if closing : ),},] 
        //如果当前字符 c 是右括号（即 map[c] 有值）
        const opposite = stack.pop();
        if (map[c] !== opposite) return false;
    } else {
        stack.push(c);
    }
}
return stack.length === 0;