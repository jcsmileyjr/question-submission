var Airtable = require('airtable');
const {key, baseId} = process.env; // Get the enviroment values defined in netlify site 
var base = new Airtable({apiKey:key}).base(baseId);

const table = base('dailyQuestions');

const submitRecord = async (fields) => {
    const createdRecord = await table.create(fields);
    console.log(createdRecord);
}

exports.handler = function(event, context, callback) {
    const {question} = JSON.parse(event.body);
    const todayDate = new Date();
    var convertedDate = todayDate.toLocaleDateString();

    const newRecord= {
      'Question': question,
      'Status':"In progress",
      'Date': convertedDate,
    }
    
    submitRecord(newRecord);
    
    callback(null, {
      statusCode: 200,
      headers: {
        /* Required for CORS support to work */
        'Access-Control-Allow-Origin': '*',
        /* Required for cookies, authorization headers with HTTPS */
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({question:{userQuestion}}),
    });
  };