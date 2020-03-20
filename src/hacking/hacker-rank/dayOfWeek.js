const options = { weekday: 'long' };
const date = new Date("2020/03/20");
console.log(`Day of week: ${date.toLocaleDateString('en-US', options)}`);