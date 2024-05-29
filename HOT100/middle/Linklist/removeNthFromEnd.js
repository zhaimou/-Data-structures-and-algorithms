// removeNthFromEnd
// var removeNthFromEnd = function(head, n) {
//     let count =0
//     while(head.next){
//         head = head.next
//         count++
//     }
//     for (let i= count; i> 0 ; i--) {
// };
var removeNthFromEnd = function(head, n) {
    let count = 0;
    let current = head; // 使用current指针来遍历链表

    // 遍历链表，计算链表长度
    while (current) {
        current = current.next;
        count++;
    }

    // 计算要删除节点的位置
    let targetIndex = count - n;

    // 处理特殊情况，如果要删除的是头节点
    if (targetIndex === 0) {
        return head.next;
    }

    // 重新初始化current指针，并遍历链表找到要删除节点的前一个节点
    current = head;
    for (let i = 0; i < targetIndex - 1; i++) {
        current = current.next;
    }

    // 删除目标节点
    current.next = current.next.next;

    return head;
};