/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let startIndex = 0;
  let endIndex = 0;
  let minLength = Infinity;
  //while startIndex is less than array length
  while (startIndex < nums.length) {
    if (Number.isNaN(sum)) break;
    //if sum is less than target
    if (sum < target) {
      //add endIndexValue to sum
      sum += nums[endIndex];
      //increment endIndex
      endIndex++;
      //else
    } else {
      //subtract startIndexValue from sum;
      sum -= nums[startIndex];
      //increment startIndex;
      startIndex++;
      minLength = Math.min(endIndex - startIndex + 1, minLength);
    }
  }
  return minLength === Infinity ? 0 : minLength;
};
// @lc code=end
