const deleteLastChat = s => s.slice(0, s.length - 1);
const isEqual = (s1, s2) => s1 === s2;


const equalsIgnroingSize = (s1, s2) => {
  const a1 = Array.from(new Set(s1.split('')));
  const a2 = Array.from(new Set(s2.split('')));
  if (a1.length === 1 && a2.length === 1) {
    return a1[0] === a2[0];
  }
  return false;
}

const isYes = (s, t, k) => {

  if (equalsIgnroingSize(s, t)) {
    let diference = Math.abs(t.length - s.length); //d2 k5
    if (k < diference) {
      return "No";
    }
    if (k == diference) {
      return "Yes";
    }
    if (k > diference) {
      return "Yes"
    }
    // return ((k - diference) % 2 == 0);
  }

  for (let i = 0; i < k; i++) {
    if (!t.includes(s)) {
      s = deleteLastChat(s);
    } else {
      const remainingSteps = k - i;
      if (s.length + remainingSteps == k) {
        return true;
      }
    }
  }
  return false;
};

function appendAndDelete(s, t, k) {
  if (s === t && k == 0) {
    return "Yes";
  }

  if (k > s.length && (k-s.length == t.length)) {
    return "Yes";
  }
  if (k > t.length && (k-t.length == s.length)){
    return "Yes";
  }

  return isYes(s, t, k) ? "Yes" : "No";
}


// console.log(appendAndDelete("zzzzz", "zzzzzzz", 4));
// console.log(appendAndDelete("ashley", "ash", 2))
// console.log(appendAndDelete("aaa", "a", 5))
console.log(appendAndDelete("abcd", "abcdert", 10));

module.exports = appendAndDelete;