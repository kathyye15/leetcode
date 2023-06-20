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
  let maxLength = 0;
  let tempLength = 0;
  //iterate through the string
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (!seen[char]) {
          seen[char] = char;
          tempLength++;
          maxLength = Math.max(tempLength, maxLength);
      } else {
          seen = {};
          seen[char] = char;
          tempLength = 1;
      }
  }
  return maxLength;
};
// @lc code=end

