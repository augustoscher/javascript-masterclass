//r is the radius
const calculateArea = r => {
  const PI = Math.PI;
  // area = PI*r²
  const area = PI * Math.pow(r, 2);

  //perimeter = PI*2r
  const perimeter = PI * (2 * r);

  console.log(area);
  console.log(perimeter);
}

calculateArea(2.6);