/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let maxLength = 0;
  for (let num of set) {
    if (set.size == 1) {
      return 1;
    }
    let prev = num - 1;
    let next = num + 1;
    if (!set.has(prev) && !set.has(next)) {
      set.delete(num);
    }
  }
  for (let num of set) {
    let runningLength = 1;
    let prev = num - 1;
    let next = num + 1;
    while (set.size) {
      if (set.has(prev)) {
        set.delete(num);
        runningLength++;
        maxLength = Math.max(runningLength, maxLength);
        set.delete(prev);
        prev -= 1;
        continue;
      }
      if (set.has(next)) {
        set.delete(num);
        runningLength++;
        maxLength = Math.max(runningLength, maxLength);
        set.delete(next);
        next += 1;
        continue;
      }
      break;
    }
  }
  return maxLength;
};
// @lc code=end
