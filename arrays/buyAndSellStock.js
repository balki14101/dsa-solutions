// Best Time to Buy and Sell Stock (Leetcode 121)
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

var maxProfit = function (prices) {
  let profit = 0;
  let minimum = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minimum) minimum = prices[i];
    if (profit < prices[i] - minimum) profit = prices[i] - minimum;
  }
  return profit;
};
console.log(maxProfit([7, 1, 5, 4, 3, 1]));
