
exports.handler = function(event, context, callback) {
    const {question} = JSON.parse(event.body);
    console.log(question);
    callback(null, {
      statusCode: 200,
      headers:{
          'Content-Type':'application/json'
      },
      body: JSON.stringify({msg:`Thank you for submitting this question ${question}`}),
      //body: `thank you for the question ${question}`,
    });
  };