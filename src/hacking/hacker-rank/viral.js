// Complete the viralAdvertising function below.
const half = n => Math.floor(n / 2);

function viralAdvertising(n) {
  const likes = [];
  const shares = [5]
  
  for (let i = 0; i < n; i++){
    shares.push(half(shares[i]) * 3)
    likes.push(half(shares[i]));
  }
  return likes.reduce((a, b) => a + b);
}

console.log(viralAdvertising(5))
console.log(viralAdvertising(3))