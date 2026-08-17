class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        for (let i =0; i < tokens.length ; i++) {
            if (tokens[i] == '+') {
                const a = stack.pop()
                const b = stack.pop()
                stack.push(a+b)
            }
            else if (tokens[i] == '-') {
                const a = stack.pop()
                const b = stack.pop()
                stack.push(b-a)
            }
            else if (tokens[i] == '/') {
                const a = stack.pop()
                const b = stack.pop()
              stack.push(Math.trunc(b / a))
            }
            else if  (tokens[i] == '*') {
                const a = stack.pop()
                const b = stack.pop()
                stack.push(a*b)
            }
            else {
                stack.push(Number(tokens[i]))
            }
        }
        return stack.pop()
    }
}