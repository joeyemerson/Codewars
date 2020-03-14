// Given two traversals of a binary tree, in-order and pre-order, reconstruct the tree.

// background: http://en.wikipedia.org/wiki/Tree_traversal#In-order

// Example:

// // this is the tree to reconstruct:
// //        4
// //       / \
// //      /   \
// //     2     6
// //    / \   /
// //   1   3 5

// inOrder  = [1,2,3,4,5,6]
// preOrder = [4,2,1,3,6,5]

// reconstructTree(inOrder,preOrder) => [ 4
//                                      , [ 2
//                                        , [ 1 , [], [] ]
//                                        , [ 3 , [], [] ]
//                                        ]
//                                      , [ 6
//                                        , [ 5 , [], [] ]
//                                        , []
//                                        ]
//                                      ]

function reconstructTree(inOrder, preOrder) {
  if (!preOrder.length) return [];

  const here = preOrder[0];
  const there = inOrder.indexOf(here);

  return [
    here,
    [...reconstructTree(inOrder.slice(0, there), preOrder.slice(1, there + 1))],
    [...reconstructTree(inOrder.slice(there + 1), preOrder.slice(there + 1))]
  ];
}

console.log(reconstructTree([1, 2, 3, 4, 5, 6], [4, 2, 1, 3, 6, 5]));

console.log([4, [2, [1, [], []], [3, [], []]], [6, [5, [], []], []]]);
