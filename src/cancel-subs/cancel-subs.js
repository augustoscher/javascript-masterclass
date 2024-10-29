const { Transform, pipeline } = require("stream");
const fs = require('fs');
const csvtojson = require('csvtojson');

const inputFile = process.argv[2] || "cancel-subs.csv";

const inputStream = fs.createReadStream(inputFile);
const toJsonStream = csvtojson();

const cancelSubscription = async (subscriptionId) => {
  const url = `http://localhost:8585/subscriptions/${subscriptionId}/cancel?reason=EXPIRED`;
  
  try {
    const response = await fetch(url, { method: 'POST' });

    if (!response.ok) {
      throw new Error(`Failed to cancel subscription ${subscriptionId}, status: ${response.status}`);
    }

    console.log(`Subscription ${subscriptionId} cancelled successfully`);
  } catch (error) {
    console.error(`Error cancelling subscription ${subscriptionId}:`, error.message);
  }
}


const cancelSubscriptionStream = new Transform({
  transform: async function(item, encoding, cb) {
    try {
      const data = JSON.parse(item);
      await cancelSubscription(data.subscriptionId);

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
  );
  console.log(`Finishing ${inputFile} file`);
})();
