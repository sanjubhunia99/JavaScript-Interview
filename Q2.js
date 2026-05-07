// first Non Reapeated Char ("aabbcddffe") --> "c"

function firstNonRepetedChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
return null;
}

console.log(firstNonRepetedChar("aabbcddffe"));

// Output: c