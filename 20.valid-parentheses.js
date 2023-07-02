/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s[0] == ")" || s[0] == ']' || s[0] == '}') return false;
  for (let i = 0; i < s.length; i++) {
      let pointer1 = s[i];
      let pointer2 = s[++i];
      if (pointer1 == '(' && pointer2 == ')') continue;
      if (pointer1 == '[' && pointer2 == ']') continue;
      if (pointer1 == '{' && pointer2 == '}') continue;
      return false;
  }
  return true;
};
// @lc code=end

