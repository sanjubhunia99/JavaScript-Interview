// Capitalize the first letter of each word in a string.
// Input: javascript
// Output: JavaScript

function capital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);

}
console.log(capital("javaScript")); // Output: JavaScript