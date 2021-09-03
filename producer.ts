const { Kafka } = require("kafkajs");
const { Turnstyl } = require("turnstyl");

// TO DO: Consider implmenting a callback and some logic to ensure that a stream can be sent and the connection kept open
// TO DO: Look into the types of objects that can be passed in
/**
 * @function passTurnstyl INCOMPLETE - does turnstyl Front Bias processes * this shouldnt be await
 * @param message Object message to be compared to DB schema
 */
const passTurnstyl = function (message) {
  //turnt;
  return message;
};

const newTS = new Turnstyl();
newTS.record;
// newTS.checkMessage()

/**
 * @function producer function that connects to Kafka sends a message then disconnects
 * @param producerName STRING name of producer
 * @param message STRING message that will be sent to Kafka
 * @param topic STRINg name of the topic that message will be posed to on Kafka
 */
const producer = async (
  producerName: string,
  message: object,
  topic: string
) => {
  //Declare a variable kafka assigned to an instance of kafka (door into the kafka brokerage)
  const kafka = new Kafka({
    clientId: producerName,
    brokers: ["kafka:9092"],
  });
  // Signal to user that producer is running
  console.log("Producer is operational");

  // Init the producer on the kafka object
  const producer = kafka.producer();

  newTS.cacheProducerEvent(topic, message);
  newTS.compareProducerToDBSchema(topic);

  try {
    //CONNECTION
    // Connect to the producer
    await producer.connect();
  } catch (error) {
    console.log("Producer Connection error: ", error);
  }

  try {
    //SEND MESSAGE
    await producer.send({
      topic: topic,
      messages: [{ value: JSON.stringify(message) }],
    });
    console.log("message is:", message);
  } catch (error) {
    console.log("error in message send", error);
  }
  console.log("Data sent by producer");
  // Close connection to the broker
  producer.disconnect();
};

export { producer };
