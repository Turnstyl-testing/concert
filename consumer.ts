const { BigQuery } = require('@google-cloud/bigquery');
const bigquery = new BigQuery({
  projectId: 'probable-cove-323115',
  keyFilename: './bigQueryServiceCredentials.json',
});
const { Kafka } = require('kafkajs');

// Init the kafka connection object
const kafka = new Kafka({
  clientId: 'bankTransfers',
  brokers: ['kafka:9092'],
});

// Error handler for Big Query inserts
function insertHandler(err, apiResponse) {
  if (err) {
    // An API error or partial failure occurred.
    console.log(err);
    if (err.name === 'PartialFailureError') {
      console.log('Partial fail: ', err.errors);
    }
    console.log(apiResponse);
  }
}

// Counter to track rows inserted into Big Query
let rowSentCounter = 0;

// Decoupled sendEachMessage function that dumps data from Kafka into Big Query
const sendEachMessage = async ({ message }) => {
  // Declare a new variable set to the parsed JSON of message value
  const messageObj = await JSON.parse(message.value);
  console.log('Event received', messageObj.event_id);
  // Connect with BQ and send data to BigQuery
  // TODO: Consider removing hard coded values for production
  // Accessing the relevant table in the target dataset
  const table = await bigquery
    .dataset('turnstyl_test_events')
    .table('bank_transfer_transactions');
  await console.log('Inserting row...');

  // Create an insertion timestamp obj
  const currentTimestamp = new Date(Date.now()).toISOString();
  // Inserts the JSON objects into my_dataset:my_table.
  await table.insert(
    {
      event_id: messageObj.event_id,
      event_timestamp: messageObj.eventTimestamp,
      insertion_timestamp: currentTimestamp,
      event_name: messageObj.eventName,
      payload: JSON.stringify(messageObj),
    },
    insertHandler
  );
  console.log(`row ${rowSentCounter++} inserted`);
  return;
};

const autoRetry = async () => {
  try {
    // Connects to Kafka topic, subscribes and runs the consumer stream
    const Consumer = async () => {
      // Here we set up our data consumer boilerplate
      let queue: string[] = new Array();
      // Init our consumer
      const consumer = kafka.consumer({ groupId: 'test-group' });
      //Connect to the consumer
      await consumer.connect();
      console.log('🏁🏁🏁 consumer connect success');
      // Subscribe to our desired topic
      await consumer.subscribe({
        // TODO: Consider removing hard coded values for production
        topic: 'bank_transfer_transactions',
        fromBeginning: true,
      });
      console.log('🔥🔥🔥 consumer subscribe success');
      // Run consumer - extracting topic, partition and message and pushing to queue
      await consumer.run({
        eachMessage: sendEachMessage,
      });
    };
    Consumer();
  } catch {
    console.log('❤️‍🔥❤️‍🔥❤️‍🔥 Kafka not ready, autoRetry in 5 seconds');
    setTimeout(() => {
      autoRetry();
    }, 3000);
  }
};

autoRetry();
