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
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
      let subString = s.slice(i);
      let tempLength = length(subString);
      maxLength = Math.max(maxLength, tempLength);
      if (tempLength === subString.length) {
          return maxLength;
      }
  }
  return maxLength;
  //helper function
    function length(string) {
    let seen = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (!seen[char]) {
            seen[char] = char
        } else {
            return i;
        }
    }
    return string.length;
  }
};
// @lc code=end

//time complexity - O(n^3)
//space complexity - O(n)