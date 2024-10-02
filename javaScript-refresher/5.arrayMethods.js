const fruits = ["Mango", "Banana", "Orange", "Lichi", "Apple"];

// 01. array.find --> find method returns only one element
const find = fruits.find((f) => f === "Orange"); // Orange
const findIndex = fruits.findIndex((f) => f === "Orange"); // 2

// 02. array.filter method --> return a new array without muted main array
const filter = fruits.filter((f) => f === "Orange" || f === "Mango");
console.log(filter); // [ 'Mango', 'Orange' ]

// 03. array.slice --> return a new array without muted main array
const slice1 = fruits.slice(start, end);
const slice2 = fruits.slice(2, 4);
console.log(slice2); //[ 'Orange', 'Lichi' ]
console.log(fruits); // ['Mango', 'Banana', 'Orange', 'Lichi', 'Apple' ]

// 04. array.splice --> return a new array with muted main array
const splice1 = fruits.splice(index, numOfRemoveElem, "addElem", "addElem");
const splice2 = fruits.splice(2, 2, "addElem", "addElem");
console.log(splice2); // [ 'Orange', 'Lichi' ]
console.log(fruits); // [ 'Mango', 'Banana', 'addElem', 'addElem', 'Apple' ]

// 05. array.concat --> added element in last single/multiple
const concat = fruits.concat("fruit 1"); // [ 'Mango', 'Banana', 'Orange', 'Lichi', 'Apple', 'fruit 1' ]
const concat2 = fruits.concat(["fruit 1", "fruit 2"]); // [ 'Mango', 'Banana', 'Orange', 'Lichi', 'Apple', 'fruit 1', 'fruit 2' ]

// 06. array.push --> muted main array
const push = fruits.push("Fruit 1");
console.log(push); // 6 = num of array element
console.log(fruits); // [ 'Mango', 'Banana', 'Orange', 'Lichi', 'Apple', 'Fruit 1' ]

// 07. array.pop --> remove last element with muted main array
const pop = fruits.pop();
console.log(pop); // Apple
console.log(fruits); // [ 'Mango', 'Banana', 'Orange', 'Lichi' ]

// 08. array.unshift --> add first element with muted main array
const unshift = fruits.unshift("Fruit 1");
console.log(unshift); // 6 = number of element
console.log(fruits); // [ 'Fruit 1', 'Mango', 'Banana', 'Orange', 'Lichi', 'Apple' ]

// 09. array.shift --> remove first element with muted main array
const shift = fruits.shift();
console.log(shift); //Mango
console.log(fruits); //[ 'Banana', 'Orange', 'Lichi', 'Apple' ]

// 10. array.map --> return a new array without muted main array
const map = fruits.map((f) => `${f}X`);
console.log(map); // [ 'MangoX', 'BananaX', 'OrangeX', 'LichiX', 'AppleX' ]
console.log(fruits); // [ 'Mango', 'Banana', 'Orange', 'Lichi', 'Apple' ]

// 11. array.reduce --> use this method on array without muted main array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reduce = numbers.reduce((total, currentValue) => total + currentValue);
console.log(reduce);

// 12. array.forEach -->
const forEach = numbers.forEach((number) => {
  const double = number * 2;
  console.log(double);
});

// 13. for of method --> it's use of all iterable things like array/string
for (number of numbers) {
  console.log(number);
}

const name = "Nizam";
for (c of name) {
  console.log(c);
}

// 14. for in  method --> for object
const language = {
  name: "JS",
  age: 1995,
  creator: "Brendon Eich",
};
for (key in language) {
  console.log(key, `:`, language[key]);
}
