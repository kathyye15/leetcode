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
var isAnagram = function (s, t) {
  let count = {};
  for (let letter of s) {
    if (!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter]++;
    }
  }

  for (let letter of t) {
    if (count[letter]) {
      count[letter]--;
      if (!count[letter]) {
        delete count[letter];
      }
    } else {
      return false;
    }
  }
  return Object.keys(count).length == 0 ? true : false;
};
// @lc code=end
//time complexity - O(n)
//space complexity - O(n)
