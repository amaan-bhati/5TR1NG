var countAndSay = function (n) {
    if (n === 1) {
        return "1";
    }

    var prev = countAndSay(n - 1);
    var count = 1;
    var say = "";

    for (var i = 0; i < prev.length; i++) {
        if (prev[i] === prev[i + 1]) {
            count++;
        } else {
            say += count + prev[i];
            count = 1;
        }
    }

    return say;
}

