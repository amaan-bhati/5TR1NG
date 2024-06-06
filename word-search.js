var exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    function backtrack(row, col, index) {
        if (index === word.length) {
            return true; 
        }

        if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] !== word[index]) {
            return false; 
        }

        const originalChar = board[row][col]; 
        board[row][col] = '#'; 

       
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            if (backtrack(newRow, newCol, index + 1)) {
                return true;
            }
        }

        board[row][col] = originalChar; 
        return false;
    }

  
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }

    return false; 
};
