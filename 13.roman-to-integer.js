/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let num = 0;
  let lookUp = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }
  for (let i = 0; i < s.length; i++) {
      let j = i;
      let symbol = s[i];
      if (symbol == 'I' && (s[j++] == 'V' || s[j++] == 'X')) {
          num -=1;
      } else if (symbol == 'X' && (s[j++] == 'L' || s[j++] == 'C')) {
          num -=10;
      } else if (symbol == 'C' && (s[j++] == 'D' || s[j++] == 'M')) {
          num -=100;
      } else {
          num += lookUp[symbol];
      }

  }
  return num;
};
// @lc code=end

