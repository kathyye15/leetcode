/*
 * @lc app=leetcode id=373 lang=javascript
 *
 * [373] Find K Pairs with Smallest Sums
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
class MinPriorityQueue {
  constructor() {
      this.values = [];
  }
  size() {
      return this.values.length;
  }
  //use sum as priority num
  enqueue(indexes, sum) {
      //create element object
      //push element into this.values;
      //call bubbleUp;
  }
  dequeue() {
      //pop the element
      //call sinkDown
  }
  bubbleUp() {

  }
  sinkDown() {
      
  }
}
var kSmallestPairs = function(nums1, nums2, k) {
//create a new MinPriorityQueue
//create result array

//enqueue all pair combos with num1 values & num2 index 0 val

//while result length is less than k and pq size is > 0
  //dequeue indexes (ind1, ind2) 
  //push corresponding values using indexes into result array
  //enqueue next possible choice (ind1 + 1, ind2, sum)

//return result array

};
// @lc code=end

