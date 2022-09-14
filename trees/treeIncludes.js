// Problem: Determine if a target value exists in a tree
//          Use either recursive and iterative DFS or BFS traversal 

const Node = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function treeIncludes(root, target) {
  if (root === null) return false;
  let queue = [root];
  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr.val === target) return true;
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return false;
}

function treeIncludesRec(root, target) {
  if (root === null) return false;
  if (root.val === target) return true;
  return (
    treeIncludesRec(root.left, target) || treeIncludesRec(root.right, target)
  );
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

let results = treeIncludesRec(a, "c");
//      a
//     / \
//    b   c
//   / \   \
//  d   e   f
console.log(results); // [a, b, c, d, e, f]
