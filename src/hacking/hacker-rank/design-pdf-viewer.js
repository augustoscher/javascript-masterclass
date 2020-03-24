// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const letters = word.split("");
  
  const widths = [];
  for (let i =0; i< letters.length; i++){
    const index = alphabet.indexOf(letters[i]);
    widths.push(h[index])
  }
  
  const maxHeight = Math.max(...widths);
  return maxHeight * 1 * widths.length;
}


const arr = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const arr2 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
console.log(designerPdfViewer(arr, "abc")); //9
console.log(designerPdfViewer(arr2, "zaba")); //28
