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
  if (str1 + str2 !== str2 + str1) return '';
  let minLength = Math.min(str1.length, str2.length);
  for (let l = minLength; l > 0; l--) {
      if ((str1.length % l === 0) && (str2.length % l === 0)) {
          return str1.substring(0, l);
      }
  }
};
//time: o(n)
//space: o(1)
// @lc code=end

