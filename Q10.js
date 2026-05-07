// Different Detween Largest Number and Smallest Number
// Input :[4,9,1,7]
// Output: 8

function different(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return max - min;
}
console.log(different([4,9,1,7])); // Output : 8
