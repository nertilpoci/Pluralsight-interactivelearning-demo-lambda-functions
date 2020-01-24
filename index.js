exports.handler = async (event) => {
    return {
         "statusCode":200,
         "body":`${event && event.queryStringParameters.firstName} ${event && event.queryStringParameters.lastName}`
    };
};
 