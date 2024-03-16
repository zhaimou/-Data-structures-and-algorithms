let removeElements = function (head, val) {
  if (head == null) return null;

  head.next = removeElements(head.next, val);

  return head.val === val ? head.next : head; //递归
};

// 哨兵 ele
let removeElements1 = function (head, val) {
  let ele = {
    next: head,
  };
  let p = ele;
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return ele.next;
};
console.log(removeElements1([1, 2, 3, 4, 5, 6], 6));
