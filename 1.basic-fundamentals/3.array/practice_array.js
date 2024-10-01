let numArray = [1, 2, 3, 4, 5, 6];

let x = numArray.indexOf(3);
// console.log(x);

array1 = [1, 2, 3, 4];
array2 = [1, 2, 3, 4];
let y = array1.concat(array2);
console.log(y);
//------------------

// array with for of --
const friends = ["Elon", "Mask", "Bill", "Gates"];

for (let friend of friends) {
  console.log(friend);
}

// array with for of and for loop --
for (i = 0; i < friends.length; i++) {
  console.log(i, friends[i]);
}
//---------------------

// reversed array --
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//one way
const reversed = numbers.reverse();
console.log(reversed);

//another way
let rev_numbers = [];
for (const num of numbers) {
  rev_numbers.unshift(num);
}
console.log(rev_numbers);
//---------------------
