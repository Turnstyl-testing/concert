const { Kafka } = require('kafkajs');
//const { turnstyl } = require('../turnstyl/src/Subscriber.ts');

let kafkaConnectionIsOpen = false;

const passTurnstyl = function (message) { //CURRENTLY UNUSED
  //turnt;
  return message;
};

// TO DO: Consider implmenting a callback and some logic to ensure that a stream can be sent and the connection kept open


const producer = async ( 
  producerName: string,
  message: object,
  topic: string
  
) => {
  
  //Declare a variable kafka assigned to an instance of kafka (door into the kafka brokerage)
  const kafka = new Kafka({
    clientId: producerName,
    brokers: ['kafka:9092'],
  });

  // Signal to user that producer is running
  console.log('Producer is operational');

  // Init the producer on the kafka object
  const producer = kafka.producer();

  try {
    // Connect to the producer
    await producer.connect();
  } catch (err) {
    console.log('Producer Connection Error:',err);
  }

    
    // Send our message to topic x
    await producer.send({
      topic: topic,
      // TO DO: Look into the types of objects that can be passed in
      messages: [{ value: JSON.stringify(message) }],
    });
    // Close connection to the broker
    await producer.disconnect();
    // Confirm to use that data has been sent
    console.log('Data sent by producer');
  };

export { producer };
