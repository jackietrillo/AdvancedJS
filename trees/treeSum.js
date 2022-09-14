const Node = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

const treeSumRec = (root) => {
  if (root === null) return 0;
  return root.val + treeSumRec(root.left) + treeSumRec(root.right);
};

var a = new Node(2);
var b = new Node(2);
var c = new Node(2);
var d = new Node(2);
var e = new Node(2);
var f = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

let results = treeSumRec(a);
//      1
//     / \
//    2   3
//   / \   \
//  4   5   6
console.log(results); // [a, b, c, d, e, f]
