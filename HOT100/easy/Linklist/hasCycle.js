var hasCycle = function(head) {
    const set = new Set();
    while(head) {
        if(set.has(head)) return true;
        set.add(head);
        head = head.next;
    }
    return false;
};