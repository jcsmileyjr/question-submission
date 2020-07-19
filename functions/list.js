var Airtable = require('airtable');
var base = new Airtable({apiKey: '********'}).base('appwTG10Xy7VARMWE');

const table = base('dailyQuestions');

const getRecords = async () => {
    const records = await table.select().firstPage();// Get all records from dailyQuestion table's firt page
    return records;
}

exports.handler = function(event, context, callback) {
    const questions = getRecords();
    
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({data:{questions}),
    });
  };