const isLeapYear = year => {
  if (year == 1900 || year == 1800 || year == 1700){
    return true;
  }
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
};

const sumArray = a => {
  return a.reduce((prev, current) => {
    return (prev += current);
  }, 0);
}

function dayOfProgrammer(year) {
  const daysOnFeb = isLeapYear(year) ? 29 : 28; 
  const daysOnYear = [31, daysOnFeb, 31, 30, 31, 30, 31, 31];
  const result = (256 - sumArray(daysOnYear))
  if (1918 == year) {
    return `${26}.09.${year}`
  }
  return `${result}.09.${year}`
}

module.exports = dayOfProgrammer;

console.log(dayOfProgrammer(2015))
console.log(dayOfProgrammer(2016))
console.log(dayOfProgrammer(1918))
