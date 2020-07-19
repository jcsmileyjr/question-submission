var Airtable = require('airtable');
const {key, baseId} = process.env; // Get the enviroment values defined in netlify site 
var base = new Airtable({apiKey:key}).base(baseId);

const table = base('dailyQuestions');

const getRecords = async () => {
    const records = await table.select().firstPage();// Get all records from dailyQuestion table's firt page
    return records;
}

exports.handler = function(event, context, callback) {
    const questions = getRecords();
    console.log(questions);
    
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({data:{questions}}),
    });
  };