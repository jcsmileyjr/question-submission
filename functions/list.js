var Airtable = require('airtable');
const {key, baseId} = process.env; // Get the enviroment values defined in netlify site 
var base = new Airtable({apiKey:key}).base(baseId);

const table = base('dailyQuestions');

const getRecords = async () => {
    console.log(`based is ${baseId}`)
    const records = await table.select().firstPage();// Get all records from dailyQuestion table's firt page
    return records;
}

exports.handler = function(event, context, callback) {
    const questions = getRecords();
    
    callback(null, {
      statusCode: 200,
      headers: {
        /* Required for CORS support to work */
        'Access-Control-Allow-Origin': '*',
        /* Required for cookies, authorization headers with HTTPS */
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({data:{questions}),
    });
  };