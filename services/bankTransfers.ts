var faker = require("faker");
("use strict");

function bankTransfers() {
  try {
    // Declare the individual properties as they correspond to fakerjs
    let uuid = faker.datatype.uuid();
    let eventTime = faker.datatype.datetime();
    let senderName = faker.name.findName();
    let senderAccount = faker.finance.account();
    let senderAccountName = faker.finance.accountName();
    let amount = faker.finance.amount();
    let currency = faker.finance.currencyName();
    let currencyCode = faker.finance.currencyCode();
    let receiverName = faker.name.findName();
    let receiverAccount = faker.finance.account();
    let receiverAccountName = faker.finance.accountName();
    let transactionDesc = faker.finance.transactionDescription();
    let transactionType = faker.finance.transactionType();

    // Declare a new bank transfer object and assign datatypes
    interface bankTransferTransaction {
      readonly event_id: String;
      readonly eventTimstamp: Date;
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
    }

    // Declare bank transfer object
    const bankTransferTransaction = {
      event_id: uuid,
      eventTimstamp: eventTime,
      eventName: "bank_transfer_transactions",
      senderName: senderName,
      senderAccount: senderAccount,
      senderAccountName: senderAccountName,
      receiverName: receiverName,
      receiverAccount: receiverAccount,
      receiverAccountName: receiverAccountName,
      transactionDesc: transactionDesc,
      transaction_type: transactionType,
      amount: amount,
      currency: currency,
      curencyCode: currencyCode,
    };
    return bankTransferTransaction;
  } catch (err) {
    console.log(
      "There was an issue generating the fake bank transaction ",
      err
    );
  }
}

export { bankTransfers };
