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
var gcdOfStrings = function(str1, str2) {
  if (str2.length > str1.length) {
      let temp = str1;
      str1 = str2;
      str2 = temp;
  }
  //find the remainder length between str1 and str2
  let remainder = str1.length % str2.length;
  let divisorWord;
  //if there is a remainder, then find the last remainder word and check if it matches string2 (completely or a portion of it is fine) 
  if (remainder) {
      divisorWord = str1.slice(str1.length - remainder);
  } 
  if (divisorWord) {
      for (let i = 0; i < divisorWord.length; i++) {
          if (str2[i] !== divisorWord[i]) {
              return "";
          }
      }
  } else {
      divisorWord = str2;
  }
  //iterate through string1 with divisorWord to check if it keeps matching
  
  for (let i = 0; i < str1.length; i++) {
      let index = i % divisorWord.length;
      //if no match, return ""
      if (str1[i] !== divisorWord[index]) {
          return "";
      }
  }
  return divisorWord;
};
// @lc code=end

