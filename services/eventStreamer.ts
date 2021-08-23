const { bankTransfers } = require("./bankTransfers.ts");
const { producer } = require("../producer.ts");

//import { bankTransfers } from "./bankTransfers";
//import { producer } from "../producer";

("use strict");
console.log("test");
// Declare an object set to the eval result of running the bankTransfers script
const bankTransferObject = bankTransfers();

producer("bankTransfers", bankTransferObject, bankTransferObject.eventName);
