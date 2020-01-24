exports.handler = async (event) => {
    console.log(event)
    return {
         "statusCode":200,
         "body":`${event && event.queryStringParameters.firstName} ${event && event.queryStringParameters.lastName}`
    };
};
 