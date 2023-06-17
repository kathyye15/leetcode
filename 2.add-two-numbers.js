/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let firstNum = '';
  let secondNum = '';
  //traverse through l1 
  while (l1) {
      //for each node value, add the value to the string '' + val.string
      firstNum = l1.val.toString() + firstNum;
      l1 = l1.next;
  }
  //traverse through l2
  while (l2) {
      //for each node value, add the value to the string ''
      secondNum = l2.val.toString() + secondNum;
      l2 = l2.next;
  }

  //turn both strings to num type and sum them
  let sum = (Number(firstNum) + Number(secondNum)).toString();
  sum = sum.split('').reverse().join('');
  let sumNode = new ListNode(Number(sum[0]));
  let prev = sumNode;
  //create list node with the sum and return the list
  for (let i = 1; i < sum.length; i++) {
      let digit = Number(sum[i]);
      let curr = new ListNode(digit);
      prev.next = curr;
      prev = curr;
  }
  return sumNode;
};
// @lc code=end

