// average all odd nums in array--

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function oddAverage(numbers) {
  let oddNumbs = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      oddNumbs.push(number);
    }
  }
  console.log(oddNumbs);
  let sum = 0;
  for (const oddNum of oddNumbs) {
    sum = sum + oddNum;
  }
  const avg = sum / oddNumbs.length;
  return avg;
}
const avg = oddAverage(numbers);
console.log("Odd Nums Avrage: ", avg);

// somethings --
