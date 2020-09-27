var Airtable = require('airtable');
const {key, baseId} = process.env; // Get the enviroment values defined in netlify site 
var base = new Airtable({apiKey:key}).base(baseId);

const table = base('dailyQuestions');

const submitRecord = async (fields) => {
    await table.create(fields);
}

const getRecords = async () => {
  const records = await table.select().firstPage();// Get all records from dailyQuestion table's firt page
  return records;
}

exports.handler = async function(event, context, callback) {
    const {question} = JSON.parse(event.body);
    const todayDate = new Date();
    var convertedDate = todayDate.toLocaleDateString();

    const newRecord= {
      'Question': question,
      'Status':"In progress",
      'Date': convertedDate,
    }
    
    submitRecord(newRecord);

    const questions = await getRecords();
    
    callback(null, {
      statusCode: 200,
      headers: {
        /* Required for CORS support to work */
        'Access-Control-Allow-Origin': '*',
        /* Required for cookies, authorization headers with HTTPS */
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({data:{questions}}),
    });
  };