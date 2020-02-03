
[//]: # (project_id: aws-lambda)
[//]: # (test: node_modules/.bin/mocha test/aws-lambda-test.js)
## AWS Lambda Functions Lab

### **Task 1 :** Write Lambda Function Body 
Using the code downloaded initial code, modify the index.js to create the body of a `lambda function` that takes in the payload from an api gateway http request `{gatewayurl}?firstName=Jane&lastName=Doe` and outputs the Full Name `Jane Doe`

The `index.js` file should look like this

```

exports.handler = async (event) => {
    return {
         "statusCode":200,
         "body":`${event && event.queryStringParameters.firstName} ${event && event.queryStringParameters.lastName}`
    };
};
 


```

Test: If successfull, you should see a a message that Task 1 test passed 



 <span style="color:green">√</span> Task 1 : should return the FullName from query string parameters firstName and lastName



Otherwise you should see an error stating that the test failed.



 <span style="color:red"> 1) Task 1 : should return the FullName from query string parameters firstName and lastName </span>






### **Task 2** Create Lambda Function on the aws console.

        1. Navigate to the aws console and login.
        2. Navigate to the Lamba Functions management page
        3. Create a new function by choosing to upload existing code
        4. Test by passing a demo payload

        

[//]: # (task_id: @trigger)
### Add API Gateway Trigger

Make your api publicaly accessible via a rest api by adding an API Gateway trigger to your function. 
The api gateway should allow get request types. 


[//]: # (task_id: @settings)
### Add API Gateway to settings

Copy the public url from the API Gateway trigger you created for the function 
and assign it to `apiGateWayUrl` property in `settings.js` to the API Gateway public url.






## Next Steps
