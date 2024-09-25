//### scope -->***

var lang = "Bangla";

function learn(topic) {
  lang = topic;
  //   console.log(`I am learning ${topic}`);
}

learn("JavaScript");

// console.log(`I know ${lang}`);

//-------------------------------------------------------------

// function -->***

// regular function -- also function statement
/*
function hello() {
  console.log("Hello World");
  //   return undefined; --> if no return by default return undefined.
}
let msg = hello();
console.log(msg);
*/

// function expression --
/*
const hello = function () {
  console.log("hello World");
};
hello();
*/

// named function expression -- standard practice
/*
const hello = function hello() {
  console.log("hello World");
};
hello();
*/

// arrow function --
/*
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
*/

// anonymous function
/*
function hello() {
  return () => {
    console.log("Hello World");
  };
}
*/

// event handler --> ***
