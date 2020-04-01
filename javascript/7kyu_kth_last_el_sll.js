// Write a function that given the head of singly linked list, and an index (0 based) counted from the end of the list, returns the element corresponding to that index.

// The function must return a falsy value for invalid input values, like an out of range index.

// So for the list 66 -> 42 -> 13 -> 666, getKthLastElement() with index 2 should return the Node (predefined object for list nodes) corresponding to 42.

// Other examples:

// getKthLastElement(1 -> 2 -> 3 -> null, 0).data === 3
// getKthLastElement(1 -> 2 -> 3 -> null, 1).data === 2

/* Predefined object for list nodes

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

*/

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function getKthLastElement(head, k) {
  if (!head || k < 0) return null;

  let curNode = { ...head };
  let len = 0;

  while (curNode) {
    curNode = curNode.next;
    len++;
  }

  if (len <= k) return null;

  curNode = { ...head };
  for (let i = 0; i < len - k - 1; i++) {
    curNode = curNode.next;
  }

  return curNode;
}

const list = new Node(1, new Node(2, new Node(3)));
console.log(getKthLastElement(list, 0).data, 3);
console.log(getKthLastElement(list, 1).data, 2);
console.log(getKthLastElement(list, 2).data, 1);
console.log(getKthLastElement(list, 3), null); // index out of range
console.log(getKthLastElement(list, -1), null); // index below 0
