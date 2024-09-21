const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
  console.log(num);
  console.log("shejan");
}

// -----------

// while loop --
let i = 0;
while (i <= 9) {
  console.log("shejan:", i);
  i++;
}

let num1 = 1;
let sum = 0;
while (num1 <= 10) {
  // console.log("shejan", num1);
  if (num1 % 2 === 0) {
    console.log("even number:", num1);
    sum = sum + num1;
  }
  num1++;
  // console.log("sum:", sum);
}
console.log("total sum:", sum);

// -------------

// for loop --
for (let i = 0; i <= 9; i++) {
  console.log("shejan", i);
}
for (let i = 0; i <= 9; i = i + 2) {
  console.log("Even: ", i);
}

let total = 0;
for (let i = 11; i <= 20; i++) {
  total = total + i;
  console.log("Odd: ", i);
}
console.log("total:", total);

//---------------

// do while loop --
let j = 1;
do {
  console.log("shejan", i);
  j++;
} while (j <= 9);
