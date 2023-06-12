/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  //create a values list;
  let values = [];

  //create sinkDown helper function
  function sinkDown() {
    let idx = values.length - 1;
    let value = values[idx];
    let parentIdx = Math.floor((idx-1)/2);
    let parentVal = values[parentIdx];
    while (idx > 0 && value >= parentVal) {
      values[parentIdx] = value;
      values[idx] = parentVal;
      idx = parentIdx;
    }
  }

  //loop through listsArray, for each node in the array, insert value to values array via minBinaryHeap pattern
  for (let i = 0; i< lists.length; i++) {
    let currentList = lists[i];
    while (currentList) {
      values.push(currentList.val);
      sinkDown();
      currentList = currentList.next;
    }
  }

  //return a linkedList built from values list;
  if (values.length === 0) return new ListNode();
  let sorted = new ListNode(values[0]);
  let prev = sorted;
  for (let j = 1; j < values.length + 1; j++) {
    if (j === values.length) {
      prev.next = null;
      break;
    }
    let newNode = new ListNode(values[j]);
    prev.next = newNode;
    prev = prev.next;
  }
  return sorted;
};
// @lc code=end

