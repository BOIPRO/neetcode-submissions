class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map()
        let left = 0
        let maxfre = 0;
        let right = 0
        let result = 0
        while (right < s.length) {
            if (map.has(s[right])) {
                map.set(s[right], map.get(s[right]) + 1)
            }
            else {
                map.set(s[right], 1)
            }
            maxfre = Math.max(maxfre, map.get(s[right]))
            while ((right - left + 1) - maxfre > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
            result = Math.max(result,right-left+1)
            right++
        }
        return result
    }
}
