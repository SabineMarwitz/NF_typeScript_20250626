"use strict";
function createSubString(s, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
}
function tree(n) {
    let result = "";
    const len = (2 * n) - 1;
    for (let i = 1; i <= len; i += 2) {
        const numBlanks = (len - i) / 2;
        const stars = createSubString("*", i);
        const blanks = createSubString(" ", numBlanks);
        result += blanks + stars + blanks + "\n";
    }
    for (let i = 0; i < n; i++) {
        const numBlanks = n - 1;
        const stars = createSubString("*", 1);
        const blanks = createSubString(" ", numBlanks);
        result += blanks + stars + blanks + "\n";
    }
    return result;
}
console.log(tree(5));
