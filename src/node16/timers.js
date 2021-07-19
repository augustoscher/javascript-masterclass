import { setTimeout } from 'timers/promises';

// 2. Stable Timers Promises API
// The Timers Promises API provides an alternative set of timer functions that return Promise objects,
// removing the need to use util.promisify().
const run = async () => {
  await setTimeout(1000);
  console.log('Hello, World!');
}

export default run;
