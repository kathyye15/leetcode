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
var containsDuplicate = function(nums) {
  let seen = {};
  //iterate through array, if value in seen, return false
  for (let val of nums) {
      if (seen[val]) return true;
      seen[val] = 1;
  }
  return false;
};
// @lc code=end
// time complexity - O(n)
// space complexity - O(n)

