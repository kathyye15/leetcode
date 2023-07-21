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
  let merged = [];
  let leftoverWord;
  if (word1.length > word2.length) {
      leftoverWord = word1.slice(word2.length);
  } else if (word2.length > word1.length) {
      leftoverWord = word2.slice(word1.length);
  }
  let min = Math.min(word1.length, word2.length);
  for (let i=0; i< min; i++) {
      let letter = word1[i];
      merged[i*2]=letter;
  }
  for (let j=0; j< min; j++) {
      let letter = word2[j];
      merged[j*2+1]=letter;
  }
  merged = merged.join('');
  if (leftoverWord) {
      return merged + leftoverWord;
  }
  return merged;
};
//time: o(n)
//space: o(n)

