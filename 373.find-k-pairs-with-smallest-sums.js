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
      let element = {
          indexes,
          sum
      }
      //push element into this.values;
      this.values.push(element);
      //call bubbleUp;
      this.bubbleUp();
  }
  dequeue() {
      let topPriority = this.values[0];
      let end = this.values.pop();
      if (this.values.length > 0) {
          this.values[0] = this.values.pop();
          this.sinkDown();
      }
      return topPriority;
  }
  bubbleUp() {
      let currIdx = this.values.length - 1;
      const currEl = this.values[currIdx];
      while(currIdx > 0) {
          let parentIdx = Math.floor((currIdx - 1/2));
          let parentEl = this.values[parentIdx];
          if (currEl.sum >= parentEl.sum) break;
          this.values[parentIdx] = currEl;
          this.values[currIdx] = parentEl;
          currIdx = parentIdx;
      }
  }
  sinkDown() {
      let currIdx = 0;
      const unsortedEl = this.values[0];
      while(true){
          let leftChildIdx = 2 * currIdx + 1;
          let rightChildIdx = 2 * currIdx + 2;
          let swapIdx = null;

          if(leftChildIdx < this.values.length){
              let leftChild = this.values[leftChildIdx];
              if(leftChild.sum < unsortedEl.sum) {
                  swapIdx = leftChildIdx;
              }
          }
          if(rightChildIdx < this.values.length){
              let rightChild = this.values[rightChildIdx];
              if(
                  rightChild.sum < unsortedEl.sum && 
                  rightChild.sum < leftChild.sum
              ) {
                 swapIdx = rightChildIdx;
              }
          }
          if(swapIdx === null) break;
          this.values[currIdx] = this.values[swapIdx];
          this.values[swapIdx] = unsortedEl;
          currIdx = swapIdx;
      }
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

