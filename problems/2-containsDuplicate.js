// Input: nums = [1, 2, 3, 1]
// Output: true

// Input: nums = [1, 2, 3, 4]
// Output: false

// Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// Output: true

function containsDuplicate(nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const hasElement = set.has(nums[i]);

    if (hasElement) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
