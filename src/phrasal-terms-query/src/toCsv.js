const { createReadStream, createWriteStream } = require('fs');
const { Transform } = require('json2csv');

const inputPath = 'data/done/metrics-40-output.csv';
const outputPath = inputPath.replace('.csv', '').concat('-done.csv');

const opts = { fields: ['alternative', 'experiment', 'name', 'query', 'day', 'hasPhrasalTerms'] };
// const transformOpts = { highWaterMark: 16384, encoding: 'utf-8' };

const input = createReadStream(inputPath);
const output = createWriteStream(outputPath);
const json2csv = new Transform(opts);

input.pipe(json2csv).pipe(output);
