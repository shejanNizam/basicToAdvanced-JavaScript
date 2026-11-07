function isAnagram(s, t) {
  // Step 1: Check string lengths

  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (map.has(char)) {
      if (map.get(char) === 0) {
        return false;
      }
      map.set(char, map.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
}

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));
// console.log(isAnagram("aabbc", "abcab"));
console.log(isAnagram("aab", "abb"));
