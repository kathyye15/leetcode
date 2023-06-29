/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
 //i - number
 //o - boolean
 //c - value between -2^31 to 2^31
 //e - 
 var isPalindrome = function(x) {
  x = x.toString();
  let start = 0;
  let end = x.length -1;
  for (let i = 0; i < Math.ceil(x.length/2); i++) {
      if (x[start] !== x[end]) {
          return false;
      }
          start++;
          end--;
  }
  return true;   
};
// @lc code=end
//time: O(N);
//space: O(1);