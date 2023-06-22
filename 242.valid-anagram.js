/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 //i - two strings
 //o - boolean
 //c - length 1 to 5 * 10^4, lowercase English letters
 //e -
 var isAnagram = function(s, t) {
  //if s and t length dont match, return false
  if (s.length !== t.length) return false;
  //create fillerArray of 26 length and fill with 0's
  let fillerArray = new Array(26).fill(0);
  //iterate through string length
  for (let i = 0; i < s.length; i++) {
      //given the index, check letter at that index in both s and t
      //use charCode at letter minus charCode value of a to find an index value between 0 to 25, increment for s and decrement for t
      fillerArray[s[i].charCodeAt() - 'a'.charCodeAt()]++;
      fillerArray[t[i].charCodeAt() - 'a'.charCodeAt()]--;
  }
  //iterate through fillerArray
  for (let val of fillerArray) {
      //if val is not 0, return false
      if (val) return false;
  }
  //return true
  return true;
};
// @lc code=end
//time complexity - O(n)
//space complexity - O(n)