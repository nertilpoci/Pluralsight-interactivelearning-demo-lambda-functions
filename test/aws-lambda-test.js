var assert = require('chai').assert,
  settings = require('../settings').settings
fetch = require('node-fetch'),
  handler = require('../index').handler;


describe('AWS Lambda', function () {
 

  it('Task 1 : should return the FullName from query string parameters firstName and lastName', async function () {
    // assert.equal("Jane Doe", (await handler({ queryStringParameters: { firstName: 'Jane', lastName: 'Doe' } })).body, 'Make sure the result returns FullName ');
  });


  
  it('Task 3 : should return Full Name from live function using api gateway', async function () {
    //  assert.notEqual(settings.apiGateWayUrl,'', 'Make sure to set the api gateway url.');
    try {
      var request = await fetch(`${settings.apiGateWayUrl}?firstName=Jane&lastName=Doe`);
      let output = await request.text()
      assert.equal("Jane Doe", output, 'Make sure the result returns FullName ');

    }
    catch (err) {
      assert.fail("actual", "expected", "Api Gateway url not reacheable")

    };

  });

});
