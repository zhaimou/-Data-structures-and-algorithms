// 如何判断是否有环形链表
function hasCycle(head) {
  let cache = new Set();

  while (head) {
    if (cache.has(head)) {
      return true;
    } else {
      cache.add(head);
    }
    head = head.next;
  }

  return false;
}

function hasCycle2(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
    return false;
  }
}
