var faker = require("faker");
("use strict");

/**
 * @function bankTransfers created fake data for the test client 
 * @returns an Object with the valid testing schema
 */
function bankTransfers() {
    // Declare a new bank transfer object and assign datatypes
    interface bankTransferTransaction {
      readonly eventId: String;
      readonly eventTimestamp: Date;
      readonly eventName: String;
      readonly senderName: String;
      readonly senderAccount: String;
      readonly senderAccountName: String;
      readonly receiverName: String;
      readonly receiverAccount: String;
      readonly receiverAccountName: String;
      readonly transactionDesc: String;
      readonly transaction_type: String;
      readonly amount: String;
      readonly currency: String;
      readonly curencyCode: String;
    };
    // Declare bank transfer object
    const bankTransferTransaction = {
      event_id: faker.datatype.uuid(),
      eventTimstamp: faker.datatype.datetime(),
      eventName: "bank_transfer_transactions",
      senderName: faker.name.findName(),
      senderAccount: faker.finance.account(),
      senderAccountName: faker.finance.accountName(),
      receiverName: faker.name.findName(),
      receiverAccount: faker.finance.account(),
      receiverAccountName: faker.finance.accountName(),
      transactionDesc: faker.finance.transactionDescription(),
      transaction_type: faker.finance.transactionType(),
      amount: faker.finance.amount(),
      currency: faker.finance.currencyName(),
      curencyCode: faker.finance.currencyCode(),
    };
    return bankTransferTransaction;
  };

export { bankTransfers };
