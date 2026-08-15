class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Tinh gia tri ben trai r tinh ben phai xong nhan nhau , O(n) + O(n) = O(n)
        const left = []
        const right = []
        let product = 1
        for (let i = 0;i < nums.length;i++) {
            left[i] = product
            product = product * nums[i]
        }
        product = 1
        for (let i = nums.length -1;i >=0 ;i--) {
            right[i] = product
            product = product * nums[i]
        }
       const result = left.map((value, i) => value * right[i]);
       return result
    }
}
