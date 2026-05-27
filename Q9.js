// Maximum Occurrence of a Character in a String
// Input: JavaScript
// Output: a

function maxChar(str) { 
    const obj = {};
    let max = 0;
    let maxChar = "";
    for (let char of str) {
        obj[char] = (obj[char] || 0) + 1;
        if (obj[char] > max) {
            max = obj[char];
            maxChar = char;
        }
    }
    return maxChar;
}
console.log(maxChar("JavaScript")); // Output: a
