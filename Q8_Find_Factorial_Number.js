// Find Factorial Number
// factorial of 5 is 120 (5*4*3*2*1 = 120)
// 

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // Output: 120