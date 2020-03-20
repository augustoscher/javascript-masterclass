//Reverse string
//Transform in number
const reverseString = (s) => {
  try {
    const reversedArray = s.split("").reverse();
    s = reversedArray.join("");
  } catch(e) {
    console.log(e.message)
  }
  console.log(s);
}

reverseString("1234");
reverseString(1234);