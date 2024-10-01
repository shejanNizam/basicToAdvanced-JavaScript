// 01. primitive -- number, string, boolean
let a = 5;
let b = 6;
a = b;
b = 7;
console.log(a); // 6
console.log(b); // 7

// 02. reference -- object, array
let x = ["JS", "Python"];
let y = ["HTML", "CSS"];
y = x;

console.log(x); // [ 'JS', 'Python' ]
console.log(y); // [ 'JS', 'Python' ]

x.push("Go");

console.log(x); // [ 'JS', 'Python', 'Go' ]
console.log(y); // [ 'JS', 'Python', 'Go' ]
