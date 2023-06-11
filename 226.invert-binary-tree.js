/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root;
  // create helper reverse function (node)
  function reverse(node) {
      //create tempright and templeft variables
      let tempLeft = node.left;
      let tempRight = node.right;
      //flip left and right child nodes
      node.left = tempRight;
      node.right = tempLeft;
      //check if left has left or left has right
      if (node.left) {
          //call reverse(left)
          reverse(node.left)
      }
      //check if right has left or right has right
      if (node.right) {
          //call reverse(right)
          reverse(node.right)
      }
  }
  //call reverse with root
  reverse(root);
  //return root
  return root;
};
// @lc code=end

