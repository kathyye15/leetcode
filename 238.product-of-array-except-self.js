/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
[1,2,3,4]
pre: [1,1,2,6]
suff: [24,12,4,1]
ans: [24,12,8,6]
*/

/* 
nums: [1,2,3,4]
ans: [24,12,8,6]
suff = 24
*/
var productExceptSelf = function (nums) {
  let ans = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    ans[i] = ans[i - 1] * nums[i - 1];
  }
  let suff = nums[nums.length - 1];
  for (let i = nums.length - 2; i > -1; i--) {
    ans[i] = ans[i] * suff;
    suff = suff * nums[i];
  }
  return ans;
};
// @lc code=end
