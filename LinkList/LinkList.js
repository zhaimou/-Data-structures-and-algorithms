class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.hand = null;
    this.length = 0;
  }
  append(val) {
    let node = new Node(val);
    if (this.hand) {
      let p = this.hand;
      while (p.next) {
        p = p.next;
      }
      p.next = node;
      //   val.next = this.hand;
    } else {
      this.hand = node;
    }
    this.length++;
  }
  print() {
    let p = this.hand;
    let str = "";
    if (p) {
      do {
        str += p.val + " -> ";
        p = p.next;
      } while (p.next);
      {
        str += p.val;
        console.log(str);
      }
    } else {
      console.log("空链表");
    }
  }
}

let linklist = new LinkList();

linklist.append(1);
linklist.append(2);
linklist.append(3);
linklist.append(4);

// console.log(linklist.length);
// console.log(linklist.print());
let removeElements = function (head, val) {
  if (head == null) return null;

  head.next = removeElements(head.next, val);

  return head.val === val ? head.next : head; //递归
};
console.log(removeElements(linklist.hand, 3));
