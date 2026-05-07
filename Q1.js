// Count Frequency of Each Character

let string = "My name is Sanju Bhunia";
let frequency = {};
for (let index of string) {
    if (frequency[index]) {
        frequency[index]++;
    } else {
        frequency[index] = 1;
    }
}
console.log(frequency);
