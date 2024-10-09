/*
01. difference between ( var, let, const )
02. function default parameter
03. arrow function, multiple parameter, function body 
04. Spread operator, array max, copy arrays
05. Object and Array Destructure
06. Keys, values, entries, delete, seal, freeze\
07. for of( use in Array ), for in( use in object )

*/

// 01. difference between ( var, let, const )

// 02. function default parameter
function add(a = 5, b = 9) {
  const result = a + b;
  return result;
}

// const sum = add(5,5);
const sum1 = add();
console.log(sum1);

// 03. arrow function, multiple parameter, function body
const add = (a, b) => a + b; //simple arrow function
add(1, 2);

const multiply = (a, b, c) => {
  const sum = a + b;
  const multi = sum * c;
  return multi;
};
multiply(1, 2, 3);

//04. Spread operator, array max, copy arrays
const arr = [1, 2, 3, 4, 5, 6];
const newArr = Math.max(...arr);
const newArr2 = [1, 2, ...arr, 7, 8];

//05. Object and Array Destructure --> js Refreshers

//06. Keys, values, entries, delete, seal, freeze --> js Refreshers

//07. for of( use in Array ), for in( use in object ) --> js Refreshers
