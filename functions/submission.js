
exports.handler = function(event, context, callback) {
    const {question} = JSON.parse(event.body);

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({msg:`Thank you for submitting this question ${question}`}),
    });
  };