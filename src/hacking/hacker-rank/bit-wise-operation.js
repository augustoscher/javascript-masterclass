//Return the maximum a & b < k for any a < b sequence
const getMaxLessThanK = (n, k) => {
    let maximum = 0;
    const s = new Array(n).fill().map((_val, idx) => idx + 1);
    for (let i = 0; i < s.length; i++) {
      for(let j = i+1; j < s.length; j++) {
        const bitWiseResult = s[i]&s[j]
        if (bitWiseResult < k && bitWiseResult > maximum) {
          maximum = bitWiseResult;
        }
      }
    }

    console.log(maximum);
}

getMaxLessThanK(5, 2); // 1
getMaxLessThanK(8, 5); // 4
getMaxLessThanK(2, 2); // 0

