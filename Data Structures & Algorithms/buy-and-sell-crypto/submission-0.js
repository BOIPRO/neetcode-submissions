class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = left+1
        let max = 0;
        while (right < prices.length ) {
            if (prices[right] - prices[left] <= 0) {
                left = right
                right++
            }
            else {
                if (prices[right] - prices[left] > max) {
                     max = prices[right] - prices[left]
                }
                right++
            }

        }
        return max
    }
}