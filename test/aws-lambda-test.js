var assert = require('chai').assert,
    settings = require('../settings').settings
    fetch = require('node-fetch'),
    handler = require('../index').handler;
    

describe('AWS Lambda', function() {
 

  it('should return the FullName from query string parameters firstName and lastName', async function() {
    assert.equal("Jane Doe",(await handler({queryStringParameters:{firstName:'Jane', lastName:'Doe'}})).body, 'Make sure the result returns FullName ');
  });

  it('should fill the api gateway url with the live url from aws console in settings.js', function() {
    assert.isNotNull(settings.apiGateWayUrl, 'Make sure to set the api gateway url.');
  });

  it('should return Full Name from live function using api gateway', async function() {
     let request = await fetch(`${settings.apiGateWayUrl}?firstName=Jane&lastName=Doe`);
     let result = await request.text()
     assert.equal("Jane Doe", result, 'Make sure the result returns FullName ');
  });

});
