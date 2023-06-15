/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
      let currNum = nums[i];
      let wantedNum = target - currNum;
      if (wantedNum in seen) {
          return [i, seen[wantedNum]];
      } else {
          seen[currNum] = i;
      }
  }
};
// @lc code=end

