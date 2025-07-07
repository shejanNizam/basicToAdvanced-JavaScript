// String reverse --
const letters = "I am learning web development.";

let reverse = "";
for (let letter of letters) {
  reverse = letter + reverse;
}
console.log(reverse);

//  String reverse using for loop --
const sentence = "I am learning web development.";

rev = "";
for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i];
  rev = letter + rev;
}
console.log(rev);

// shortcut --
const reversed = sentence.split("").reverse().join("");
console.log(reversed);

//------------------
const name = "John";

const strName = new String("nizam");
console.log(strName);
