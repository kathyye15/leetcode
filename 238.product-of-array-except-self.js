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

//[1,2,3,4]
//pre: [1, 1, 2, 6]
//suff: [ , , ,1]
var productExceptSelf = function (nums) {
  let pre = [];
  let suff = [];
  let ans = [];
  pre[0] = 1;
  suff[nums.length - 1] = 1;
  for (let i = 1; i < nums.length; i++) {
    pre[i] = pre[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 2; i > -1; i--) {
    suff[i] = suff[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    ans[i] = pre[i] * suff[i];
  }
  return ans;
};

/* improve space complex to O(1)
[1,2,3,4]
  curr = 24;
  ans = [24,12,8,6]

*/

// @lc code=end
