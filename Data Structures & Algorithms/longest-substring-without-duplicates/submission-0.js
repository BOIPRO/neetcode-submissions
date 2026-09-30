class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    const map = new Map();

    while (right < s.length) {
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1;
        }

        map.set(s[right], right);

        maxLength = Math.max(maxLength, right - left + 1);

        right++;
    }

    return maxLength;
}
}