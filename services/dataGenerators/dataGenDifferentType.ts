var faker = require("faker");
("use strict");

/**
 * @function bankTransfers generates object of fake data with different datatypes than the main
 * @returns an object with fake data, with 3 different datatypes then the main schema
 */
function bankTransfersDifferentType() {
    // Declare a new bank transfer object and assign datatypes
    interface bankTransferTransaction {
      readonly eventId: String;
      readonly eventTimestamp: Date;
      readonly eventName: String;
      readonly senderName: String;
      readonly senderAccount: Number;
      readonly senderAccountName: String;
      readonly receiverName: String;
      readonly receiverAccount: Number;
      readonly receiverAccountName: String;
      readonly transactionDesc: String;
      readonly transaction_type: String;
      readonly amount: Number;
      readonly currency: String;
      readonly curencyCode: String;
    };
    // Declare bank transfer object
    const bankTransferTransaction = {
      event_id: faker.datatype.uuid(),
      eventTimstamp: faker.datatype.datetime(),
      eventName: "bank_transfer_transactions",
      senderName: faker.name.findName(),
      senderAccount: Number(faker.finance.account()),
      senderAccountName: faker.finance.accountName(),
      receiverName: faker.name.findName(),
      receiverAccount: Number(faker.finance.account()),
      receiverAccountName: faker.finance.accountName(),
      transactionDesc: faker.finance.transactionDescription(),
      transaction_type: faker.finance.transactionType(),
      amount: Number(faker.finance.amount()),
      currency: faker.finance.currencyName(),
      curencyCode: faker.finance.currencyCode(),
    };
    return bankTransferTransaction;
  };

export { bankTransfersDifferentType };
