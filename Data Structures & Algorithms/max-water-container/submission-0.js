class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right =  heights.length - 1
        let max = 0
        while(left < right) {
            if (heights[left] > heights[right]) {
                if ((heights[right] * (right -left)) > max) {
                    max = heights[right] * (right -left)
                }
                right--
            }
            else {
                if ((heights[left] * (right-left)) > max) {
                    max = heights[left] * (right - left)
                }
                left++
            }
           
        }
        return max
      
    }
}