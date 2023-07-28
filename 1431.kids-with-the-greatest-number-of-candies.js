/*
 * @lc app=leetcode id=1431 lang=javascript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = 0;
  let res = [];
  for (let num of candies) {
      if (num > max) {
          max = num;
      }
  }
  for (let i = 0; i < candies.length; i++) {
      let candyNum = candies[i];
      if (candyNum + extraCandies >= max) {
          res.push(true);
      } else {
          res.push(false);
      }
  }
  return res;
};
// @lc code=end

