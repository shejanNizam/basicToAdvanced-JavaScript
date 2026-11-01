// find max number
const numbers = [10, 25, 5, 80, 45]; // Output : 80

function findMax(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    // console.log(numbers[i], "-->", max);
  }

  return max;
}

console.log(findMax(numbers));
// findMax(numbers);
