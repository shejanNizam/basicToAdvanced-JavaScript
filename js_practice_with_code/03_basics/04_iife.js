// Immediately Invoked Function Expressions (IIFE)

(function one() {
  // named iife
  console.log("nizam");
})();

((name) => {
  console.log(`nizam2 with nickname ${name}`);
})("shejan");
