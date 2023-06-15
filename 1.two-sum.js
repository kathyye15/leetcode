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
  //object of seen (value, index)
  let seen = {};
  //iterate over array
  for (let i = 0; i < nums.length; i++) {
      let currNum = nums[i];
      let wantedNum = target - currNum;
      //check if wantedNum has been seen
      if (seen[wantedNum] || seen[wantedNum] === 0) {
          //return the answer if yes
          return [i, seen[wantedNum]];
      } else {
          //otherwise, add currNum to seen 
          seen[currNum] = i;
      }
  }
};
// @lc code=end

