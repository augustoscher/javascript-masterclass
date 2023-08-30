// https://medium.com/the-node-js-collection/node-js-16-available-now-7f5099a97e70
import regexpMatchIndices from './regexp.js';
import run from './timers.js';
import { parseNdJson } from './ndjson.js';

const main = async () => {
  console.log("===== Node 16 =====\n")
  regexpMatchIndices()
  await run()
  console.log("=============")

  const json = await parseNdJson()
  console.log(json)
}

main();
