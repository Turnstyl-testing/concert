/**
 * Note - should we generalize this and include in our package? Could be helpful feature and easy win / addition
 * 
 */

const { Kafka } = require("kafkajs");

// Imports the Google Cloud client library
const {
    ConnectionServiceClient,
  } = require('@google-cloud/bigquery-connection');
  
// connector boilerplate 
const Connector = async () => {
    // Here we set up our data consumer boilerplate
    let queue = []; 
    const BATCHSIZE = 1000;
    
    const consumer = Kafka.consumer({ groupId: 'test-group' })

    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

    await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log({
        value: message.value.toString(),
        })
        // need to save data as well, into some type of queue
        // need to make sure we are getting which when where data as well
        queue.push(message.value.toString()); // should this be toString?
    },
    });

    // when queue gets large enough -> dump it into big query
    if (queue.length === BATCHSIZE){

        // Create a client
        const client = new ConnectionServiceClient();

        // TODO -----
        // research how to add the data here from our queue
        // bigQuery boilerplate below
        const parent = `projects/${project}/locations/US`; // what should this be connected to?

        async function listConnections() {
        const [connections] = await client.listConnections({
            parent: parent,
        });

        console.info(`found ${connections.length} connections:`);
        console.info(connections);
        }
        const listConnectionsResponse = listConnections();

        // at end, dump queue and reset 
        queue = [];
    }
};
export { Connector };