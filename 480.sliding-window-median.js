/*
 * @lc app=leetcode id=480 lang=javascript
 *
 * [480] Sliding Window Median
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//helper
function medianFinder(arr) {
  let sorted = arr.sort((a,b) => a-b);
  if (arr.length % 2 === 0) {
      let first = (arr.length/2) -1;
      let second = arr.length/2;
      return (sorted[first] + sorted[second])/2;

  } else {
      let mid = Math.floor(arr.length/2);
      return sorted[mid];
  }
}

var medianSlidingWindow = function(nums, k) {
  //if k less than array length, return avg
  if (k > nums.length) {
      let sum = 0;
      for (let val of nums) {
          sum += val;
      }
      return sum/k;
  }
  //create result array
  let result = [];
  //iterate through nums
  for (let i = 0; i < nums.length; i++) {
      if (k > nums.length) break;
      let input = [];
      let j = i;
      while(j !== k) {
          input.push(nums[j]);
          j++;
      }
      result.push(medianFinder(input));
      k += 1;
  }
  //return result
  return result;
};
// @lc code=end

//time: O((n - k + 1) * k log k)
//space: O(n)