// complete the challenge here 👇

// 1 - Number List:
const numbers = [23, 54, 32, 87, 47, 15, 98, 6, 63, 41];

// 2 - Even/Odd Counter:
let even_count = 0,
  odd_count = 0,
  low_count = 0,
  high_count = 0,
  medium_count = 0;

for (let i = 0; i <= numbers.length - 1; i++) {
  if (numbers[i] % 2 == 1) {
    odd_count++;
  } else {
    even_count++;
  }
}
console.log("Even numbers:", even_count);
console.log("Odd numbers:", odd_count);

// 3 - Range Classifier:
for (let i = 0; i <= numbers.length - 1; i++) {
  if (numbers[i] < 30) {
    low_count++;
  } else if (numbers[i] >= 30 && numbers[i] <= 70) {
    medium_count++;
  } else {
    high_count++;
  }
}
console.log("Low numbers:", low_count);
console.log("Medium numbers:", medium_count);
console.log("High numbers:", high_count);

// 4 - Sum and Average:
const sum = numbers.reduce((a, b) => a + b, 0);
const average = sum / numbers.length;

console.log("Sum:", sum);
console.log("Average:", average.toFixed(2));
