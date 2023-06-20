/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let seen = {};
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (!seen[char]) {
          seen[char] = char
      } else {
          return i;
      }
  }
  return 0;
};
// @lc code=end

