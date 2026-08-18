class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const result = []
        for (let i = 0; i < temperatures.length; i++) {
            if (stack.length === 0) {
                stack.push({ "value": temperatures[i], "index": i })
            }
            else {
                while (stack.length != 0 && temperatures[i] > stack[stack.length - 1].value) {
                    const data = stack.pop()
                    result[data.index] = i - data.index

                }
                stack.push({ "value": temperatures[i], "index": i })
            }
        }
        while (stack.length != 0) {
            const data = stack.pop()
            result[data.index] = 0
        }
        return result
    }
}