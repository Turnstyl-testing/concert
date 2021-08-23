/**
 * Note - should we generalize this and include in our package? Could be helpful feature and easy win / addition
 *
 */

//google bigquery cloud loading boilerplate, could we use this with non cloud data? e.g. bigquery.load()
const { BigQuery } = require("@google-cloud/bigquery"); // bigQuery vs. bigQuery-connection?
const bigquery = new BigQuery();
// Imports the Google Cloud client library
const {
  ConnectionServiceClient,
} = require("@google-cloud/bigquery-connection");
const { consumer } = require("./consumer.ts");

// our test topic is "bank_transfer_transactions"

// Declare async connector
const Connector = async () => {
  try {
    // Here we set up our data consumer boilerplate
    let queue: string[] = new Array();
    queue = await consumer(queue, "bank_transfer_transactions");
    // Declare our desired batch size
    console.log('Hello Im here', queue);
  } catch (err) {
    console.log("consumer issue: ", err);
  }
};

Connector();

//   // Create a client
//   const client = new ConnectionServiceClient();

//   // when queue gets large enough -> dump it into big query
//   if (queue.length === BATCHSIZE) {
//     // TODO -----
//     // research how to add the data here from our queue
//     // bigQuery boilerplate below
//     const parent = `projects/${project}/locations/US`; // what should this be connected to?

//     console.info(`found ${connections.length} connections:`);
//     console.info(connections);
//   }
//   const listConnectionsResponse = listConnections();

//   // bigquery.load() ?

//   // at end, dump queue and reset
//   queue = [];
// };

// async function listConnections() {
//   const [connections] = await client.listConnections({
//     parent: parent,
//   });
