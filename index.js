// Longest palindromic substring: Given a string, find the longest substring which is palindrome.

// * Input: abac
// * output: aba
// *
// * Input: tacag
// * output: aca
// *
// * Input: wegeeksskeegyuwe,
// * Output: "geeksskeeg"

function longestPalindrome(s) {
  if (s.length < 1) return "";
  let start = 0,
    maxLength = 1;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (Math.floor(s.length - i) * 2 <= maxLength) break;

    const oddLength = expandAroundCenter(i, i);
    const evenLength = expandAroundCenter(i, i + 1);
    const currentMax = Math.max(oddLength, evenLength);

    if (currentMax > maxLength) {
      maxLength = currentMax;
      start = i - Math.floor((currentMax - 1) / 2);
    }
  }

  return s.substring(start, start + maxLength);
}

module.exports = longestPalindrome;
