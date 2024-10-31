const { Transform, pipeline } = require("stream");
const fs = require('fs');
const csvtojson = require('csvtojson');

const inputFile = `data/cancel-subs-${process.argv[2]}.csv`
const outputFile = `data/cancel-subs-${process.argv[2]}-result.jsonl`

const inputStream = fs.createReadStream(inputFile);
const outputStream = fs.createWriteStream(outputFile);
const toJsonStream = csvtojson();

let count = 0

const cancelSubscription = async (subscriptionId) => {
  const url = `http://localhost:8585/subscriptions/${subscriptionId}/cancel?reason=EXPIRED`;
  
  try {
    const response = await fetch(url, { method: 'POST' });

    if (!response.ok) 
      throw new Error(`Failed to cancel subscription ${subscriptionId}, status: ${response.status}`);

    const [data] = await response.json();

    console.log(`Subscription ${subscriptionId} cancelled successfully - ${++count}`);
    return { status: 'ok', changeId: data.changeId };
  } catch (error) {
    console.error(`Error cancelling subscription ${subscriptionId}:`, error.message);
    return { status: 'error', changeId: null };
  }
}


const cancelSubscriptionStream = new Transform({
  transform: async function(item, encoding, cb) {
    try {
      const input = JSON.parse(item);
      const response = await cancelSubscription(input.subscriptionId);
      const data = { ...input, ...response };
      cb(null, `${JSON.stringify(data)}\n`);
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
    cancelSubscriptionStream,
    outputStream
  );
  console.log(`Finishing ${inputFile} file`);
})();
