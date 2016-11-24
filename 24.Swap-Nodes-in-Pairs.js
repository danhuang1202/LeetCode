var swapPairs = function(head) {

    var result = null,
        resultCurrent = null,
        current = head;
  
    while (current) {
      var first = null,
          second = null;
        
        second = new ListNode(current.val);
        current = current.next;
        
        if (current) {
          first = new ListNode(current.val);
          first.next = second;
          current = current.next;
        
          if (resultCurrent) {
              resultCurrent.next = first;
          } else {
              result = first;
          }
      
          resultCurrent = second;
        } else {
              resultCurrent.next = second;
        }
    }
  
    return result;
};
