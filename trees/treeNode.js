const Node2 = {
    val : null,
    left: null,
    right: null
}

 function Node3(val) {
    this.val = val;
    this.left = null;
    this.right = null;
 }
 
 class Node4 {
     constructor(val) {
         this.val = val;
         this.left = null;
         this.right = null;
     }
 }

 const Node = function(val) {
    this.val = val;
    this.left = null;
    this.right = null;
 }

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d'); 
var e = new Node('e');
var f = new Node('e');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;



    //      a
    //     / \
    //    b   c
    //   / \   \
    //  d   e   f