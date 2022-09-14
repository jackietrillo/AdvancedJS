function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var maxDepth = function(root) {
    var maxLevel = 0

    function depth(node, level) {
    
        if (node === null)
            return maxLevel;
               
        if (level > maxLevel) { maxLevel = level; }

        if (node.left !== null){
            depth(node.left, level + 1)
        }
        if (node.right !== null){
            depth(node.right, level + 1)
        }
        
        return maxLevel;
    }
     
   return depth(root, 1);
    

};



var leafRightLevel2 = new TreeNode(15, null, null );
var leafLeftLevel2 = new TreeNode(17, null, null );
var leafRightLevel1 = new TreeNode(20, leafRightLevel2, leafLeftLevel2 );
var leafLeftLevel1 = new TreeNode(9, null, null );
var root = new TreeNode(1, null, new TreeNode(2, null, null ) );

var result = maxDepth(root, 1);
result
