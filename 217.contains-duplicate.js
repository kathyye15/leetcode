/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let dupeSet = new Set(nums);
  if (dupeSet.size < nums.length) {
    return true;
  }
  return false;
};
// @lc code=end
// time complexity - O(n)
// space complexity - O(n)
