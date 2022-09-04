 
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

var levelOrder = function (root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length) {
        const numNodes = queue.length;
        const temp = [];
        for (let i = 0; i < numNodes; i++) {
            const subtree = queue.shift();
            temp.push(subtree.val);
            if (subtree.left !== null) queue.push(subtree.left);
            if (subtree.right !== null) queue.push(subtree.right);
        }
        result.push(temp);
    }

    return result;
};

//let input = [3,9,20,null,null,15,7];
var leafRightLevel2 = new TreeNode(15, null, null );
var leafLeftLevel2 = new TreeNode(17, null, null );
var leafRightLevel1 = new TreeNode(20, leafRightLevel2, leafLeftLevel2 );
var leafLeftLevel1 = new TreeNode(9, null, null );
var root = new TreeNode(3, leafLeftLevel1, leafRightLevel1 );
let result = levelOrder(root);

result