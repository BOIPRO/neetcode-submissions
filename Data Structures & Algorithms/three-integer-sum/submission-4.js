class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = []
        const sortnums = nums.sort((a,b)=> a-b)
        for (let i = 0 ; i < sortnums.length;i++){
            if ( i > 0 && sortnums[i] === sortnums[i-1]) {
                continue
            }
            let left = i+1;
            let right = sortnums.length -1
            while (left < right) {
                if (left > i+1 && sortnums[left] === sortnums[left-1]) {
                    left++
                    continue
                }
                if (sortnums[i] + sortnums[left] + sortnums[right] > 0) {
                    right--
                }
                else if (sortnums[i]+ sortnums[left] + sortnums[right] == 0) {
                    result.push([sortnums[i],sortnums[left],sortnums[right]])
                    left++
                }
                else {
                    left++
                }
            }
        }
        return result
    }
}