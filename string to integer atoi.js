/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {

    // Remove leading whitespace
    s = s.trim();
    if (!s.length) {
        return 0;
    }

    // Check if the number is negative or positive
    let sign = s[0] === '-' ? -1 : 1;

    // Ignore the sign character
    if (s[0] === '-' || s[0] === '+') {
        s = s.slice(1);
    }

    // Read digits until the first non-digit character or end of input
    let digits = [];
    for (let char of s) {
        if (!/[0-9]/.test(char)) {
            break;
        }
        digits.push(char);
    }

    // Convert the digits into an integer
    if (!digits.length) {
        return 0;
    }
    let num = parseInt(digits.join(''));

    // Apply sign and clamp the integer if necessary
    num = sign * num;
    num = Math.max(Math.min(num, Math.pow(2, 31) - 1), -Math.pow(2, 31));

    return num; F


};
