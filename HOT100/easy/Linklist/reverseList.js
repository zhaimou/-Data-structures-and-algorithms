// 206. 反转链表
// 简单
// 相关标签
// 相关企业
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 

// 示例 1：


// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
// 示例 2：


// 输入：head = [1,2]
// 输出：[2,1]
// 示例 3：

// 输入：head = []
// 输出：[]
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
var isPalindrome = function(head) {
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    // [1, 2, 2, 1]
    for (let i = 0, j = arr.length -1 ;i < j; i++, j--) {
        if (arr[i] !== arr[j]) {
            return false
        }
    }
    return true

};