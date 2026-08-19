class Solution {
    /**
     /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = []
        let carfleet = 1;
        for (let i = 0; i < position.length; i++) {
            const time = (target - position[i]) / speed[i]
            stack.push({ "position": position[i], "time": time })
        }
        const sortStack = stack.sort((a, b) => a.position - b.position)
        let currentTime = stack.pop().time
        while (stack.length != 0) {
            const newTime = stack.pop().time
            if (currentTime < newTime) {
                carfleet++
                currentTime = newTime
            }
        }
        return carfleet
    }
}