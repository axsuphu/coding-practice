// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  //edge case
  //return false if:
  //strings are not same length
  //split the string
  // 	[
  //   'a', 'n', 'a',
  //   'g', 'r', 'a',
  //   'm'
  // ]
  //iterate over array
  //put each letter as key, and each time it occurs as a value //{a: 3, n: 1, ...}
  //if map[i] (ex: map[a]) exists, increment it's value
  //otherwise, make a key value pair of letter with value of 1
  //iterate over t
  //decrement that letter if it is found
  //if all object values are 0, it is anagram, return true
  //otherwise, return false
  if (s.length !== t.length) {
    return false;
  }
  let extraLetters = [];
  let map = {};
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  t = t.split("");
  t.forEach((letter) => {
    if (map[letter]) {
      map[letter]--;
    }
  });

  //put all extra letters into an array
  //if array length === 0, return true
  //otherwise return false
  for (const key in map) {
    if (map[key] > 0) {
      extraLetters.push(key);
    }
  }

  return extraLetters.length === 0 ? true : false;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

//SUBMISSION
//runtime: 95 ms (beats 81.9%)
//memory: 42.9 MB {beats 83.91%}

//---------------SECOND SOLUTION -----------------

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let map = {};
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (map[t[j]]) map[t[j]]--;
    else {
      return false;
    }
  }

  console.log(map);
  return true;
};

//SUBMISSION
//runtime: 88 ms (beats 86.79%)
//memory: 43 MB {beats 81.86%}
