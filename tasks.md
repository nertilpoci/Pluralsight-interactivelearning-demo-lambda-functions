
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
   
   <p> <img src="https://raw.githubusercontent.com/nertilpoci/Pluralsight-interactivelearning-demo-lambda-functions/master/Screenshots/aws%20console.PNG" width="220" height="240" />
   </p>

2. Navigate to the Lamba Functions management page

   <p> <img src="https://github.com/nertilpoci/Pluralsight-interactivelearning-demo-lambda-functions/blob/master/Screenshots/aws%20console%202.PNG?raw=true" width="220" height="240" />
   </p>

3. Create a new function by choosing to upload existing code

   <p> <img src="https://github.com/nertilpoci/Pluralsight-interactivelearning-demo-lambda-functions/blob/master/Screenshots/aws%20console%203.PNG?raw=true" width="220" height="240" />
   <img src="https://github.com/nertilpoci/Pluralsight-interactivelearning-demo-lambda-functions/blob/master/Screenshots/aws%20console%204.PNG?raw=true" width="220" height="240" />
   </p>


4. Test by passing a demo payload


   <p> <img src="https://github.com/nertilpoci/Pluralsight-interactivelearning-demo-lambda-functions/blob/master/Screenshots/aws%20console%205.PNG?raw=true" width="220" height="240" />
   <img src="https://github.com/nertilpoci/Pluralsight-interactivelearning-demo-lambda-functions/blob/master/Screenshots/aws%20console%206.PNG?raw=true" width="220" height="240" />
   </p>


If sucessfull the test should return the fullname in the response on the body property


```

Response:
{
  "statusCode": 200,
  "body": "Jane Doe"
}

```


### **Task 3** Add api gateway trigger to the lambdafunction created on **Task 2** 

Make your api publicaly accessible via a rest api by adding an API Gateway trigger to your function. 
The api gateway should allow get request types. 

1. Add a trigger from the functions page by using the add trigger button.
 <p> <img src="https://github.com/nertilpoci/Pluralsight-interactivelearning-demo-lambda-functions/blob/master/Screenshots/aws%20console%207.PNG?raw=true" width="220" height="240" />
   </p>

2. Pick Api Gateway from the available triggers
    <p> 
   <img src="https://github.com/nertilpoci/Pluralsight-interactivelearning-demo-lambda-functions/blob/master/Screenshots/aws%20console%209.PNG?raw=true" width="220" height="240" />
   </p>
3. Choose Rest Api Template and Leave the API open to public on the Security section.
    <p>
   <img src="https://github.com/nertilpoci/Pluralsight-interactivelearning-demo-lambda-functions/blob/master/Screenshots/aws%20console%209.PNG?raw=true" width="220" height="240" />
   </p>
4. Copy the public url from the API Gateway trigger you created for the function 
and assign it to `apiGateWayUrl` property in `settings.js` to the API Gateway public url.
    <p> 
   <img src="https://github.com/nertilpoci/Pluralsight-interactivelearning-demo-lambda-functions/blob/master/Screenshots/aws%20console%2010.PNG?raw=true" width="220" height="240" />
   </p>

  Test: If successfull, you should see a a message that Task 3  tests passed 

  
 <span style="color:green">√</span>  Task 3 : should return Full Name from live function using api gateway



Otherwise you should see an error stating that the test failed and why.



 <span style="color:red">  Make sure to set the api gateway url. </span>
 <span style="color:red">  Api Gateway url not reacheable </span>





