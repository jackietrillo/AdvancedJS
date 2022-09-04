const Node = function(val) {
    this.val = val;
    this.left = null;
    this.right = null;
 }

function breadthFirstTraversal(root) {
    if (!root) return [];
    let results = [];
    let queue = [root]; 
    while(queue.length > 0) {
        let curr = queue.shift();       
        results.push(curr.val);         
        if (curr.left) queue.push(curr.left); 
        if (curr.right) queue.push(curr.right); 
    }
   return results;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d'); 
var e = new Node('e');
var f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

let results = breadthFirstTraversal(a);
    //      a
    //     / \
    //    b   c
    //   / \   \
    //  d   e   f
console.log(results);  // [a, b, c, d, e, f]