const { BigQuery } = require('@google-cloud/bigquery');
require('dotenv').config();
const bigquery = new BigQuery();

// Function that queries the Big Query API and fetches the latest record from our event table
const schemaQuery = async () => {
  // Declare the SQL query to be run
  // TODO: Remove hard coded table address on iteration
  const query: string = `SELECT payload FROM probable-cove-323115.turnstyl_test_events.bank_transfer_events ORDER BY insertion_timestamp DESC LIMIT 1`;

  // Declare the options object to reference the query
  const options = {
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    query: query,
  };

  // Run the query as a job
  const [job] = await bigquery.createQueryJob(options);

  // Wait for the query to finish
  const [rows] = await job.getQueryResults();
  if (rows[0]) console.log('payload successfully fetched from DB:', rows[0]);
  // return the first row from the table
  return rows[0];
};

export { schemaQuery };
