const { Kafka } = require("kafkajs");
("use strict");

const Producer = async (
  producerName: string,
  message: object,
  topic: string
) => {
  try {
    // Signal to user that producer is running
    console.log("Producer is operational");
    //Declare a variable kafka assigned to an instance of kafka (door into the kafka brokerage)
    const kafka = new Kafka({
      clientId: producerName,
      brokers: ["localhost::29092"],
    });
    // Init the producer on the kafka object
    const producer = kafka.producer();
    // Connect to the producer
    await producer.connect();
    // Send our message to topic x
    await producer.send({
      topic: topic,
      // TO DO: Look into the types of objects that can be passed in
      messages: [
        { value: JSON.stringify("Yolan and Dillon trying hard") },
        { value: JSON.stringify("Test msg 2") },
        { value: JSON.stringify("This should be 3rd") },
        { value: JSON.stringify("This should be either first or last??!") }],
    });
    // Close connection to the broker
    await producer.disconnect();
    // Confirm to use that data has been sent
    await console.log("Data sent by producer");
  } catch (err) {
    console.log(err);
  }
};

export { Producer };
