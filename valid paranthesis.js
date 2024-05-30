
var isValid = function (s) {

    var stack = [];
    var mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (var i = 0; i < s.length; i++) {
        var char = s.charAt(i);

        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== mapping[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;

};
