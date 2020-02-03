// Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.

// For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }

// Note: the list may be null and can hold any type of value.

function indexOf(head, value) {
  let curNode = head;
  let index = 0;
  while (curNode) {
    if (curNode.data === value) return index;
    index++;
    curNode = curNode.next;
  }
  return -1;
}

// cannot run tests locally unless listFromArray function and Node class is built
console.log(indexOf(null, 17), -1);
console.log(indexOf(listFromArray([1, 2, 3]), 2), 1);
console.log(indexOf(listFromArray(['aaa', 'b', 'abc']), 'aaa'), 0);
console.log(indexOf(listFromArray([17, '17', 1.2]), 17), 0);
console.log(indexOf(listFromArray([17, '17', 1.2]), '17'), 1);
console.log(indexOf(listFromArray([1, 2, 3, 3]), 3), 2);
