/*
 * @lc app=leetcode id=1768 lang=javascript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let merged = '';
  let i = 0;
  while (i < word1.length + word2.length) {
      if (i < word1.length) {
          merged+=word1[i];
      }
      if (i < word2.length) {
          merged+=word2[i];
      }
      i++;
  }
  return merged;
};
//time: o(n)
//space: o(n)

