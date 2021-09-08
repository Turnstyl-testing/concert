const { bankTransfers } = require('./bankTransfers.ts');
const { producer } = require('../producer.ts');
import { bankTransfersDifferentType } from './dataGenerators/dataGenDifferentType';
import { bankTransfersMissingField } from './dataGenerators/dataGenMissingField';

/**
 * @function mixedDataGenerator function randomly chooses One schema and sends the message
 * @returns
 */
const mixedDataGenerator = () => {
  //collection of data generators
  const dataGens = [
    bankTransfers,
    bankTransfersDifferentType,
    bankTransfersMissingField,
  ];
  //choose random data from set

  bankTransferObject = dataGens[Math.floor(Math.random() * dataGens.length)]();
};

// Declare an object set to the eval result of running the bankTransfers script
let bankTransferObject;

mixedDataGenerator();

producer(
  'bank_transfer_transactions',
  bankTransferObject,
  bankTransferObject.eventName
);
