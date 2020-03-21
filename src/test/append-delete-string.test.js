const appendAndDelete = require("../hacking/hacker-rank/append-delete-char");
const assert = require("assert");

describe("append and delete strings", function() {
  it("Should return YES", () => {
    const result = appendAndDelete("hackerhappy", "hackerrank", 9);
    assert.deepEqual("Yes", result);
  });

  it("Should return YES", () => {
    const result = appendAndDelete(
      "uoiauwrebgiwrhgiuawheirhwebvjforidkslweufgrhvjqasw",
      "vgftrheydkoslwezxcvdsqjkfhrydjwvogfheksockelsnbkeq",
      100
    );
    assert.deepEqual("Yes", result);
  });

  it("Should return YES", () => {
    const result = appendAndDelete("zzzzz", "zzzzzzz", 4);
    assert.deepEqual("Yes", result);
  });

  it("Should return NO", () => {
    const result = appendAndDelete("ashley", "ash", 2);
    assert.deepEqual("No", result);
  });

  it("Should return NO", () => {
    const result = appendAndDelete("abcd", "abcdert", 10);
    assert.deepEqual("No", result);
  });


  it("Should return YES", () => {
    const result = appendAndDelete("aaa", "a", 5);
    assert.deepEqual("Yes", result);
  });
  
});
