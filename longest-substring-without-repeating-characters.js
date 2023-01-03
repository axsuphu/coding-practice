//Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  //if the substring continues without repetitive letters, return the length

	//edge case: if string is less than 2, return string.length

  //iterate through string
  //assign key value pair for letter and number
  //if at any pont, the map has pair with value of >1, put the length of that into an array , delete map and start again with next letter??
  //at the end, look at array, return math.max

  let map = new Map();

  s = s.split("").forEach((letter) => {
    if (map.letter > 0 ) {
      map.set(letter, 1);
    } else if ()
  });

  return map.size;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
