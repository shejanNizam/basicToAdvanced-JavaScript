// some object methods

const language = {
  name: "JS",
  age: 1995,
  creator: "Brendon Eich",
};
// 01. create all keys array
const keys = Object.keys(language); // [ 'name', 'age', 'creator' ]

// 02. create all values array
const values = Object.values(language); // [ 'JS', 1995, 'Brendon Eich' ]

// 03. create key-value pair array
const entries = Object.entries(language); // [ [ 'name', 'JS' ], [ 'age', 1995 ], [ 'creator', 'Brendon Eich' ] ]

// 04. add a properties in object
language.popularities = "90%";
//or
const a = "popularities"; // { popularities: "90%" }
language[a] = "90%";
//or
language["popularities"] = "90%";

// 05. add a property if key and value are same
const x = "x";

const language = {
  name: "JS",
  age: 1995,
  creator: "Brendon Eich",
  //   x: x  or
  x, // if key and value are same then write just one
};
