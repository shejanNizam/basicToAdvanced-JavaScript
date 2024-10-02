// spread Operator --
// 01. spread for array --> only for one layer
const fruits = ["Banana", "Orange"];
const spreadArr = [...fruits]; // [ 'Banana', 'Orange' ]

// 02. spread for object --> only for one layer
const language = {
  name: "JS",
  age: 1995,
  creator: "Brendon Eich",
};
const spreadObj = {
  ...language,
}; // { name: 'JS', age: 1995, creator: 'Brendon Eich' }

// Rest Operator --
function sum(text, ...rest) {
  const result = rest.reduce((total, currentValue) => total + currentValue);
  console.log(`${text}: ${result}`);
}
sum("The sum is: ", 5, 6, 7, 8);
