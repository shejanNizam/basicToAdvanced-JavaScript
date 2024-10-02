// let first = "I Learn";
// let second = "JS";
// let result = first + " " + second;

// console.log(result);
const lang = null;
const qualescing = lang ?? "JS"; // if lang = any nullish value return "JS"
const logicalOr = lang || "JS"; // if lang = any falsy value return "JS"
const logicalAnd = lang && "JS"; // if lang = any truthy value return "JS"
