/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  // result[i] = nums[i] + nums[i-1];
  // iterate over nums array
    // set current index to the sum of current value and previous value
  for (let i=1; i<nums.length; i++) {
      nums[i] += nums[i-1]; // nums[i] = nums[i] + nums[i-1];
  }
  return nums;
};
// @lc code=end
//time complexity - O(n)
//space complexity - O(n)