// 438. 找到字符串中所有字母异位词
// 中等
// 相关标签
// 相关企业
// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
// 示例 1:
// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
//  示例 2:
// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

var findAnagrams = function(s, p) {
    const len = s.length
    // 首先定义一个长度为26的数组charNumList，用来存放每个小写字母出现的次数。
    const charNumList = new Array(26).fill(0)
    const res = []
    let left = 0, right = 0
    for (let i = 0; i < p.length; i++) {
    // 对于字符串p中的每个字母，通过p[i].charCodeAt() - 97获取其ASCII码值，并将其减去97，
    // 得到该字母在charNumList中对应的下标。将该下标的元素值+1，表示该字母出现了一次。
      charNumList[p[i].charCodeAt() - 97]++
    }

    while (right < len) {
  //  charNumList[s[right].charCodeAt() - 97]-- 将当前字符对应的元素值-1，表示该字符出现了一次。
      charNumList[s[right].charCodeAt() - 97]--
    // charNumList[s[right].charCodeAt() - 97] < 0，
    // 当前字符在s中出现的次数已经超过了p中出现的次数，
    // 则需要移动左指针进行调整，直到当前字符在s中出现的次数小于等于p中出现的次数。
      while (charNumList[s[right].charCodeAt() - 97] < 0) {
        
        charNumList[s[left].charCodeAt() - 97]++
        left++
      }
      //说明找到了一个满足条件的“字母异位词”，将left保存在结果数组res中 
      if (right - left + 1 === p.length) {
        res.push(left)
      }
      right++
    }
  
    return res
};


// console.log("a".charCodeAt() - 97)