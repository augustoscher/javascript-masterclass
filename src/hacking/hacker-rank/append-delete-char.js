const equalsIgnroingSize = (s1, s2) => {
  const a1 = Array.from(new Set(s1.split("")));
  const a2 = Array.from(new Set(s2.split("")));
  if (a1.length === 1 && a2.length === 1) {
    return a1[0] === a2[0];
  }
  return false;
};

function appendAndDelete(s, t, k) {
  var end = 0;

  for (var i = 0; i < Math.min(t.length, s.length); i++) {
    if (s[i] == t[i]) {
      end++;
    } else {
      break;
    }
  }

  var maxIter = s.length + t.length;
  var minIter = maxIter - 2 * end;

  if ((k >= minIter) & ((k - minIter) % 2 == 0)) {
    return "Yes";
  } else if (k >= maxIter) {
    return "Yes";
  } else {
    return "No";
  }
}

// console.log(appendAndDelete("zzzzz", "zzzzzzz", 4));
// console.log(appendAndDelete("ashley", "ash", 2))
// console.log(appendAndDelete("aaa", "a", 5))
console.log(appendAndDelete("abcd", "abcdert", 10));

module.exports = appendAndDelete;
