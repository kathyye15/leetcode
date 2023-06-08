/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// I - node
// O - node
// C - length of list from 0 up to 5000. Node value -5000 to 5000.
// E - none

var reverseList = function(head) {
  //prev is null
  let prev = null;
  //next
  let next;
  //currentNode is head
  let currentNode = head;
  // traverse through linkedlist, starting with the head
  // while currentNode.next is truthy, keep traversing
  while (currentNode) {
    // set next to be currentNodes next
    next = currentNode.next;
    //set currentNodes next to be Prev
    currentNode.next = prev;
    //set prev to be currentNode
    prev = currentNode;
    // set currentNode to be next;
    currentNode = next;
  }
  return prev;
}; 
// @lc code=end

