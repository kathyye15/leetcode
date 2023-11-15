/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

//i - array of nums
//o - number (max profit between buy low, sell high)
//c - array length 1 to 10^5, number value 0 to 10^4
//e -
var maxProfit = function (prices) {
  let profit = 0;
  let buyIndex = 0;
  let sellIndex = 0;
  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];
    if (price < prices[buyIndex]) {
      buyIndex = i;
      sellIndex = buyIndex;
    }
    if (price > prices[sellIndex]) {
      sellIndex = i;
    }
    profit = Math.max(profit, prices[sellIndex] - prices[buyIndex]);
  }
  return profit;
};
// @lc code=end
//time - O(n)
//space - O(1)
