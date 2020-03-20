const v = ["a", "e", "i", "o", "u"];
const a = ["b", "c", "d", "f", "g"];
const h = ["h", "j", "k", "l", "m"];
const n = [
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const getLetter = s => {
  const getRes = (l) => {
    if (v.includes(l)){
      return 'A'
    }
    if (a.includes(l)) {
      return 'B'
    }
    if (h.includes(l)) {
      return 'C'
    }
    if (n.includes(l)) {
      return 'D'
    }
  };

  const i = s.charAt(0).toLowerCase();
  const res = getRes(i);
  switch (res) {
    case 'A': return 'A'
    case 'B': return 'B'
    case 'C': return 'C'
    case 'D': return 'D'
  }
};

const val = 'z'
console.log(getLetter(val));

// console.log(h.has(val[0]));

