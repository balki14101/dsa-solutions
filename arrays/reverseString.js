// Problem : Reverse String (leetcode 344)
// https://leetcode.com/problems/reverse-string/description/

var reverseString = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - i - 1) {
      let temp = s[i];
      s[i] = s[s.length - i - 1];
      s[s.length - i - 1] = temp;
    }
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
