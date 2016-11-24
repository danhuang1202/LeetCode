var swapPairs = function(head) {
    if  (!head || !head.next) {
        return head;
    }
    
    var result = null,
        resultCurrent = null,
        input = head;
  
    while (input) {
      var first = null,
          second = null;
        
        second = new ListNode(input.val);
        input = input.next;
        
        if (input) {
          first = new ListNode(input.val);
          first.next = second;
          input = input.next;
        
          if (resultCurrent) {
              resultCurrent.next = first;
          } else {
              result = first;
          }
      
          resultCurrent = second;
        } else {   
          if (resultCurrent) {
              resultCurrent.next = second;
          } else {
              result = second;
          }
        }
    }
  
    return result;
};
