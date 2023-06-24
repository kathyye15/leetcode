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
let mergeKLists = function(lists) {
  //create a values list;
  let values = [];

  //loop through listsArray, for each node in the array, insert value to values array
  for (let i = 0; i< lists.length; i++) {
    let currentList = lists[i];
    while (currentList) {
      values.push(currentList.val);
      currentList = currentList.next;
    }
  }

  //return a linkedList built from values list;
  if (values.length === 0) return null;;
  values.sort((a,b) => a - b);
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

//time: O(n log n)
//space: O(n)



//todo binary heap solution: time: 
//O(m log k)
//space: O(k) 
//m representing number of lists * number of nodes
//k representing number of lists