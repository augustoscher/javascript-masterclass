const fs = require('fs');
const csvSplitStream = require('csv-split-stream');
 
return csvSplitStream.split(
  fs.createReadStream('data/done/metrics-phrasal-terms-copy.csv'),
  { lineLimit: 250000 },
  (index) => fs.createWriteStream(`data/done/done-${index}.csv`)
)
.then(csvSplitResponse => {
  console.log('csvSplitStream succeeded.', csvSplitResponse);
}).catch(csvSplitError => {
  console.log('csvSplitStream failed!', csvSplitError);
});
