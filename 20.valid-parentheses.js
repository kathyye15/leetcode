/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

//stack approach
var isValid = function(s) {   
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  
  for (let i = 0 ; i < s.length ; i++) {
      let c = s[i];
      if (map[c]) {
        stack.push(map[c])
      } else if (c !== stack.pop()) {
        return false;
      } 
  }
  
  return !stack.length;
};
// @lc code=end
//time: o(n)
//space: o(n)

