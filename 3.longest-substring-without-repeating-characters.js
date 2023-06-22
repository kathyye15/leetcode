/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;
    let maxLength = 0;
    let seen = {};
    let start = 0;
    for (var i = 0; i < s.length; i++) {
        let char = s[i];
        //if char not seen
        if (seen[char] === undefined) {
            //store in seen;
            seen[char] = i;
            //maxLength = Math.max(maxLength, i + 1 - start);
            maxLength = Math.max(maxLength, i + 1 - start);
        }
        //if char seen
        else {
            //while firstChar doesn't match currentChar, increment start until they match
            while (s[start] !== char && start < s.length) {
                seen[s[start]] = undefined;
                start++;
            } 
            //when they match; increment start; update matching char;
            seen[char] = i;
            start++;
            maxLength = Math.max(maxLength, i + 1 - start);
        }
    }
    return maxLength;
};
// @lc code=end

//time complexity - O(n)
//space complexity - O(n)