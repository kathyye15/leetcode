/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let i = 0, j = s.length - 1; j > i; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};
// @lc code=end
