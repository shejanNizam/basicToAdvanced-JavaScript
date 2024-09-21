// add two number using funtion --
function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}
add(2, 3);

//-----------------

// return type function --
function tenTimes(num) {
  const result = num * 10;
  return result;
}
const output = tenTimes(10);
console.log(output);
//-------------------

// sum of all array element --
function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum = sum + number;
  }
  return sum;
}

const numbs = [1, 2, 3, 4, 5];
const sum = sumOfNumbers(numbs);
console.log("Sum:", sum);
//----------------------

// all even elements in array --
function evenOnly(numbers) {
  const evenElem = [];
  for (const number of numbers) {
    // console.log(number);
    if (number % 2 === 0) {
      evenElem.push(number);
    }
  }
  return evenElem;
}

const numbs1 = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNum = evenOnly(numbs1);
console.log(evenNum);
//-------------------

// all even elements sum in array --
function evenOnly(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sum = sum + number;
      console.log(number);
    }
  }
  return sum;
}

const numbs2 = [1, 2, 3, 4, 5, 6, 7, 8];
const sum1 = evenOnly(numbs2);
console.log("All Even numbs sum:", sum1);
//------------------------------
