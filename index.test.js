const longestPalindrome = require("./index");

describe("longestPalindrome", () => {
  test("empty string", () => {
    expect(longestPalindrome("")).toBe("");
  });

  test("single character", () => {
    expect(longestPalindrome("a")).toBe("a");
  });

  test("no palindromes (unique characters)", () => {
    expect(longestPalindrome("abcde")).toBe("a");
  });

  test("example 1: abac → aba", () => {
    expect(longestPalindrome("abac")).toBe("aba");
  });

  test("example 2: tacag → aca", () => {
    expect(longestPalindrome("tacag")).toBe("aca");
  });

  test("example 3: weekeesskeegyuwe → geeksskeeg", () => {
    expect(longestPalindrome("wegeeksskeegyuwe")).toBe("geeksskeeg");
  });

  test("full string palindrome", () => {
    expect(longestPalindrome("racecar")).toBe("racecar");
  });

  test("even-length palindrome", () => {
    expect(longestPalindrome("abba")).toBe("abba");
  });
});
