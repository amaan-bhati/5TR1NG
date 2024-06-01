var generateParenthesis = function (n) {
    let result = [];

    const backtrack = (curr, open, close) => {
        if (curr.length === n * 2) {
            result.push(curr);
            return;
        }

        if (open < n) {
            backtrack(curr + '(', open + 1, close);
        }

        if (close < open) {
            backtrack(curr + ')', open, close + 1);
        }
    };

    backtrack('', 0, 0);
    return result;
};
