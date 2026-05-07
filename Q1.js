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

/*Output:
{
  M: 1,
  y: 1,
  ' ': 4,
  n: 3,
  m: 1,
  e: 1,
  i: 2,
  s: 1,
  u: 2,
  B: 1,
  h: 1
}
*/