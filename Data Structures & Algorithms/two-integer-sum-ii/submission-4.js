class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map()
        let left = 0;
        let right = numbers.length - 1;
        while (left <= right) {
            if (map.has(numbers[left])) {
               return [Math.min(map.get(numbers[left]), left + 1), Math.max(map.get(numbers[left]), left + 1)]
            }
            else {
                 const needed1 = target - numbers[left]
                map.set(needed1, left+1)
            }
            if (map.has(numbers[right])) {
                return [Math.min(map.get(numbers[right]), right + 1), Math.max(map.get(numbers[right]), right + 1)]
            }
            else {
                const needed2 = target - numbers[right]
                map.set(needed2, right+1)
            }
            left++
            right--

        }
        return []
    }
}