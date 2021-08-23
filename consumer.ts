const { Kafka } = require("kafkajs");

// Init the kafka connection object
const kafka = new Kafka({
  clientId: "bankTransfers",
  brokers: ["localhost:29092"],
});

const consumer = async (queue: any, consumertopic: string) => {
  try {
    // Init our consumer
    const consumer = kafka.consumer({ groupId: "test-group" });
    //Connect to the consumer
    await consumer.connect();
    // Subscribe to our desired topic
    await consumer.subscribe({
      topic: consumertopic,
      fromBeginning: true,
    });
    // Run consumer - extracting topic, partition and message and pushing to queue
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        // Declare a new variable set to the parsed JSON of message value
        const messageObj = JSON.parse(message.value);
        const eventObj = {
          event_id: messageObj.eventId,
          event_timestamp: messageObj.eventTimestamp,
          event_name: messageObj.eventName,
          payload: messageObj,
        };

        // need to save data as well, into some type of queue
        // need to make sure we are getting which when where data as well
        queue.push(eventObj);
        console.log(queue.length);
        //console.log(queue.length, eventObj);
        if (queue.length === 2) {
          return queue;
        }
      },
    });
  } catch (err) {
    console.log(err);
  }
};
export { consumer };
