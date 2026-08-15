class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set()
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] != '.') {
                    if (seen.has(board[i][j]))
                        return false
                    seen.add(board[i][j])
                }
            }
            seen.clear()
            for (let j = 0; j < board.length; j++) {
                if (board[j][i] != '.') {
                    if (seen.has(board[j][i]))
                        return false
                    seen.add(board[j][i])
                }
            }
            seen.clear()
        }
        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {
                seen.clear();

                for (let i = boxRow * 3; i < boxRow * 3 + 3; i++) {
                    for (let j = boxCol * 3; j < boxCol * 3 + 3; j++) {
                        if (board[i][j] !== '.') {
                            if (seen.has(board[i][j])) {
                                return false;
                            }
                             seen.add(board[i][j]);
                        }
                    }
                }
            }
        }
        return true
    }
}