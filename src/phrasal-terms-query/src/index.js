const { Transform, pipeline } = require("stream");
const fs = require('fs');
const csvtojson = require('csvtojson');
const fetchPrhasalTerms = require('./request');

const inputFile = process.argv[2] || "data/metrics_bkp.csv";
const outputFile = inputFile.replace('.csv',"").concat('-output.csv');

const inputStream = fs.createReadStream(inputFile);
const outputStream = fs.createWriteStream(outputFile);
const toJsonStream = csvtojson();

const hasPhrasalTerms = async (query) => {
  const data = await fetchPrhasalTerms(query);
  return data && data.matches && data.matches.length > 0;
}

const transformStream = new Transform({
  transform: async function(item, encoding, cb) {
    try {
      const metric = JSON.parse(item);
      if (metric.alternative === 'true') {
        metric.hasPhrasalTerms = true;
      } else {
        metric.hasPhrasalTerms = await hasPhrasalTerms(metric.query);
      }

      cb(null, `${JSON.stringify(metric)}\n`);
    } catch (err) {
      console.log("error: ", err)
      cb(err);
    }
  }
});

const pipefyStreams = async (...args) => {
  return new Promise((resolve, reject) => {
    pipeline(...args, (error) => (error ? reject(error) : resolve("ok")));
  });
}

(async () => {
  console.log(`Starting process on ${inputFile} file ...`);
  await pipefyStreams(
    inputStream,
    toJsonStream,
    transformStream,
    outputStream,
  );
  console.log(`Finishing ${inputFile} file`);
})();
