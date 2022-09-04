const Node = function(val) {
    this.val = val;
    this.left = null;
    this.right = null;
 }

function depthFirstTraversal2(root) {
    if (!root) return [];
    let results = [];
    let stack = [root]; 
    while(stack.length > 0) {
        let curr = stack.pop();       
        results.push(curr.val); 
        if (curr.right) stack.push(curr.right); 
        if (curr.left) stack.push(curr.left); 
    }
   return results;
}

function depthFirstTraversal(root) {
   if (root === null) return [];
   let results = [];        
    
   let leftValues = depthFirstTraversal(root.left);   
   let rightValues = depthFirstTraversal(root.right);      
    
   results.push(root.val, ...leftValues, ...rightValues);   
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

let results = depthFirstTraversal(a);
    //      a
    //     / \
    //    b   c
    //   / \   \
    //  d   e   f
console.log(results);