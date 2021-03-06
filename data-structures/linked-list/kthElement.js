// implement an algorithm that finds the kth element to last element of a singly linked list

module.exports = (linkedlist, k) => {
  let p1 = linkedlist;
  let p2 = linkedlist;
  
  //iterate to figure out which kth node is
  for (let i = 0; i < k; i++) {
    if (p1.value === null) {
      return null;
    } 
    
    p1 = p1.next;
  }
  
  //the points will move together but k spaces apart
  //when p1 hits null, p2 should be at the kth spot from the end
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  
  
  return p2;
}