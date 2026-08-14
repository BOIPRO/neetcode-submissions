class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // Dem tan so xuat hien roi , tao bucket, them vao bucket r lay ra
    topKFrequent(nums, k) {
        const map = new Map()
        const result = []
        for (let i =0; i < nums.length ; i++) {
            if (map.has(nums[i])) {
                map.set(nums[i],map.get(nums[i])+ 1)
            }
            else 
                map.set(nums[i],1)
        }
        const bucket = Array.from({length : nums.length+1},()=> [])
        for (const [key,value] of map) {
            bucket[value].push(key)
        }

        for (let i = bucket.length -1; i >= 0; i--) {
            for (let j =0 ; j < bucket[i].length ;j++ ) {
                result.push(bucket[i][j])
                if (result.length  === k)
                    return result
            }
        }
        return result
    }
}