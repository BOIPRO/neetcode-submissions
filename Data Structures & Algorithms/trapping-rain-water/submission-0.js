class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length -1
        let maxLeft = height[left]
        let maxRight = height[right]
        let water = 0
        while(left < right) {
            if (height[left] > maxLeft) {
                maxLeft = height[left]
            }
            if (height[right] > maxRight) {
                maxRight = height[right]
            }
            if (height[left] < height[right]) {
                water += Math.min(maxLeft,height[right]) - height[left]
                left++
            }
            else {
                water+= Math.min(maxRight,height[left]) - height[right]
                right--
            }
        }
        return water
    }
}