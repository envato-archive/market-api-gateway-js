const test = require('tape')

const ApiGateway = require('../lib/')

test('new ApiGateway instance', function (t) {
  const apiGateway = new ApiGateway('xxxxxxxx')

  t.equal(typeof apiGateway, 'object', 'shoud be an object')

  t.end()
})
