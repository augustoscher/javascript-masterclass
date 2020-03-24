// Complete the utopianTree function below.
function utopianTree(n) {
  if (n == 0) {
    return 1;
  }

  let treeHeight = 1;
  let isSpring = true;
  while(n > 0) {
    if (isSpring) {
      isSpring = false;
      treeHeight = treeHeight * 2

    } else {
      isSpring = true;
      treeHeight += 1
    }

    n -= 1;
  }
  return treeHeight;
}

console.log(utopianTree(5));
