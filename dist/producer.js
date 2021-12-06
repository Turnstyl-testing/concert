"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.producer = void 0;
const { Kafka } = require("kafkajs");
const { turnstyl } = require("turnstyl");
let kafkaConnectionIsOpen = false;
const turnt = new turnstyl();
console.log(turnt);
const producer = async (
  producerName,
  message,
  topic
  // TO DO: Consider implmenting a callback and some logic to ensure that a stream can be sent and the connection kept open
) => {
  try {
    // Signal to user that producer is running
    console.log("Producer is operational");
    //Declare a variable kafka assigned to an instance of kafka (door into the kafka brokerage)
    const kafka = new Kafka({
      clientId: producerName,
      brokers: ["kafka:9092"],
    });
    // Init the producer on the kafka object
    const producer = kafka.producer();
    // Connect to the producer
    await producer.connect();
    const passTurnstyl = await function (message) {
      //turnt;
      return message;
    };
    // Send our message to topic x
    await producer.send({
      topic: topic,
      // TO DO: Look into the types of objects that can be passed in
      messages: [{ value: JSON.stringify(message) }],
    });
    // Close connection to the broker
    await producer.disconnect();
    // Confirm to use that data has been sent
    await console.log("Data sent by producer");
  } catch (err) {
    console.log(err);
  }
};
exports.producer = producer;
