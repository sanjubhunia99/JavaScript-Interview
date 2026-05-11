// first Non Reapeated Char ("aabbcddffe") --> "c"

// Output: c

let str = "aabbcddffe";

function firstNonRepetedChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepetedChar(str));