

var detectCycle = function(head) {
    if(!head) return null
 var map = new WeakMap()
 while(head.next) {
   if(map.get(head.next)) {
     return head.next
   }
   map.set(head, true)
   head = head.next
 }
 return null
};