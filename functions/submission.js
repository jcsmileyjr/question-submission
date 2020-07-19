
exports.handler = function(event, context, callback) {
    const {userQuestion} = JSON.parse(event.body);
    console.log(userQuestion);
    
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