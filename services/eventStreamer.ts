const { bankTransfers } = require('./bankTransfers.ts');
const { producer } = require('../producer.ts');

('use strict');
// Declare an object set to the eval result of running the bankTransfers script
const bankTransferObject = bankTransfers();

producer('bankTransfers', bankTransferObject, bankTransferObject.eventName);
