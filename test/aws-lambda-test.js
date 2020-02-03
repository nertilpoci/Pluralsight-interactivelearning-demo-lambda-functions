var assert = require('chai').assert,
  settings = require('../settings').settings
fetch = require('node-fetch'),
  handler = require('../index').handler;


describe('AWS Lambda', function () {
 

  it('Task 1 : should return the FullName from query string parameters firstName and lastName', async function () {
    assert.equal("Jane Doe", (await handler({ queryStringParameters: { firstName: 'Jane', lastName: 'Doe' } })).body, 'Make sure the result returns FullName ');
  });

  it('should fill the api gateway url with the live url from aws console in settings.js @publish @trigger',  function () {
    assert.notEqual(settings.apiGateWayUrl,'', 'Make sure to set the api gateway url.');
  });
  
  it('should return Full Name from live function using api gateway  @publish @trigger', async function () {
    assert.isNotNull(settings.apiGateWayUrl, 'Make sure to set the api gateway url.');
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
