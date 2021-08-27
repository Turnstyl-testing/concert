var faker = require("faker");
("use strict");

/**
 * @function bankTransfersMissingField generates object of fake data with 
 * missing fields from the main schema 
 * @returns Object with Missing fields from the the main schema 
 */
function bankTransfersMissingField() {
    // Declare a new bank transfer object and assign datatypes
    interface bankTransferTransaction {
      readonly eventId: String;
      readonly eventTimestamp: Date;
      readonly eventName: String;
      readonly senderName: String;
      readonly senderAccount: String;
      readonly senderAccountName: String;
      readonly receiverName: String;
      //readonly receiverAccount: String;
      readonly receiverAccountName: String;
      readonly transactionDesc: String;
      //readonly transaction_type: String;
      readonly amount: String;
      //readonly currency: String;
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
      //receiverAccount: faker.finance.account(), -Missing Field
      receiverAccountName: faker.finance.accountName(),
      transactionDesc: faker.finance.transactionDescription(),
      //transaction_type: faker.finance.transactionType(), -Missing Field
      amount: faker.finance.amount(),
      //currency: faker.finance.currencyName(), -Missing Field 
      curencyCode: faker.finance.currencyCode(),
    };
    return bankTransferTransaction;
  };

export { bankTransfersMissingField };
