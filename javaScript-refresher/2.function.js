// function -->***

//system -- 01: regular function -- also function statement
function hello() {
  console.log("Hello World");
  //   return undefined; --> if no return by default return undefined.
}
let msg = hello();
console.log(msg);

//system -- 02: function expression --
const hello = function () {
  console.log("hello World");
};
hello();

//system -- 03: named function expression -- standard practice
const hello = function hello() {
  console.log("hello World");
};
hello();

//system -- 04: arrow function --
const hello = () => {
  console.log("Hello World");
};

const add = (a, b) => a + b;

const returnObj = () => {
  return {
    a: 5,
    b: 6,
  };
};
console.log(returnObj());

//system -- 05: anonymous function
function hello() {
  return () => {
    console.log("Hello World");
  };
}
