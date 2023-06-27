/*
 * @lc app=leetcode id=373 lang=javascript
 *
 * [373] Find K Pairs with Smallest Sums
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  //create result array
  let result = [];
  let index1 = 0;
  let index2 = 0;
  //while length less than k and length less than possible combinations
  while (result.length < k && result.length < nums1.length * nums2.length) {
      if (nums2[index2] === undefined) {
          index2--;
          index1++;
          continue;
      }
      if (nums1[index1] === undefined) {
          index1--;
          index2++;
          continue;
      } 
      if (nums1[index1] < nums2[index2]) {
          for (let i = 0; i < nums2.length && result.length < k; i++) {
              result.push([nums1[index1], nums2[i]]);
          }
          index2++;
      } else {
          for (let j = 0; j < nums1.length && result.length < k; j++) {
              result.push([nums1[j], nums2[index2]]);
          }
          index1++;
      }
  }
  //return result
  return result;
};
// @lc code=end

