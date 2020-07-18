
exports.handler = function(event, context, callback) {
    const {question} = JSON.parse(event.body);
    console.log(question);
    
    callback(null, {
      statusCode: 200,
      headers: {
        /* Required for CORS support to work */
        'Access-Control-Allow-Origin': '*',
        /* Required for cookies, authorization headers with HTTPS */
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({msg:`Thank you for submitting this question ${question}`}),
      //body: `thank you for the question ${question}`,
    });
  };