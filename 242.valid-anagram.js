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
  //check lengths, if dont match, return false
  if (s.length !== t.length) return false;
  //create seen object
  let seen = {};
  //iterate through first string, store character count in seen object
  for (char of s) {
      if (!seen[char]) {
          seen[char] = 1;
      } else {
          seen[char]++;
      }
  }
  //iterate through second string 
  for (char of t) {
      //if count is already 0, return false
      if (seen[char] === 0) return false;
      //decrement character count
      seen[char]--;
  }
  //iterate through second string to check if all char count is 0, return true if so, return false if not all 0
  for (char of t) {
      if (seen[char]) return false;
  }
  for (char of s) {
      if (seen[char]) return false;
  }
  return true;
};
// @lc code=end
//time complexity - O(n)
//space complexity - O(n)