class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        for (let i =0; i < s.length ; i++) {
            if (s[i] == '(')  stack.push(')')
            else if (s[i] == '[')  stack.push(']')
            else if (s[i] == '{')  stack.push('}')
            else {
                if (s[i] != stack.pop()) {
                    return false
                }
            }
        }
        if (stack.length > 0)
            return false
        return true
    }
}