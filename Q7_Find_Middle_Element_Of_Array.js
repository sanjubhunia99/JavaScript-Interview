// Find the Middle Element of an Array 
// Input: [10, 20, 30, 40, 50]
// Output: 30

let arr = [10, 20, 30, 40, 50];
function middleEle(arr) {
    let mid = Math.floor(arr.length / 2);

    return arr[mid];

}
console.log(middleEle(arr));
