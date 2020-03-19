//Reverse string
//Transform in number
const reverseString = (s) => {
  let result = s;  
  try {
    const reversedArray = s.split("").reverse();
    result = reversedArray.join("");
  } catch(e) {
    console.log(e.message)
  }
  console.log(result);
}

reverseString("1234");
reverseString(1234);