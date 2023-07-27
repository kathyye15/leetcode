/*
 * @lc app=leetcode id=1071 lang=javascript
 *
 * [1071] Greatest Common Divisor of Strings
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
 //i - 2 strings
 //o - string
 //c - input strings are all uppercase, string length 1 to 1000
 //e - 
 var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
      return '';
  }
  let gcd = 1;
  if (str2.length % str1.length === 0) {
      gcd = str1.length;
  } else if (str1.length % str2.length === 0) {
      gcd = str2.length;
  } else {
      let remainder = Math.abs(str2.length - str1.length);
      if (str1.length % remainder === 0) {
          gcd = remainder;
      } else {
          gcd = str1.length % remainder;
      }
  }
  return str1.substring(0, gcd);
};
// @lc code=end

