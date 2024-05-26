var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(0);
    let cur = head;
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            cur.next = list1;
            list1 = list1.next;
        }
        else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    if(list1) cur.next = list1;
    if(list2) cur.next = list2;
    return head.next;
};

var mergeTwoLists = function(l1, l2) {
    if(l1 === null){
        return l2;
    }
    if(l2 === null){
        return l1;
    }
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};