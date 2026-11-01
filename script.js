let first = "I Learn";
let second = "JS";
let result = first + " " + second;

// console.log(result);

// Problem Statement:
// তোমাকে একটি Integer Array nums এবং একটি Integer target দেওয়া হবে।
// এমন দুটি সংখ্যার Index Return করতে হবে যাদের যোগফল target-এর সমান।

// Input:
// nums = [2, 7, 11, 15]       Output: [0, 1]
// target = 9

// Input:
// nums = [3, 2, 4]        Output: [1, 2]
// target = 6

// Input:
// nums = [3, 3]       Output: [0, 1]
// target = 6

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
