const test = require('tape')
const noop = function () {}

const ApiGateway = require('../lib/')
const stats = require('../lib/stats')
const catalog = require('../lib/catalog')

test('new ApiGateway instance', function (t) {
  t.test('should throw if missing access token', function (assert) {
    assert.throws(function () {
      const apiGateway = new ApiGateway()
      // do nothing but prevent standard complain about unused variable
      noop(apiGateway)
    }, 'shoud throw')

    assert.throws(function () {
      const config = {}
      const apiGateway = new ApiGateway(config)
      noop(apiGateway)
    }, 'should throw if object missing token')
    assert.end()
  })

  t.test('should create apiGateway instance with string', function (assert) {
    const apiGateway = new ApiGateway('dummy token')

    assert.equal(apiGateway instanceof ApiGateway, true, 'should be instance of ApiGateway')
    assert.equal(typeof apiGateway._request, 'object', 'should have _request method')

    assert.equal(apiGateway.stats instanceof stats, true, 'should create new stats instance')
    assert.equal(apiGateway.catalog instanceof catalog, true, 'should create new catalog instance')

    assert.end()
  })

  t.test('should create apiGateway instance with object', function (assert) {
    const apiGateway = new ApiGateway({
      accessToken: 'dummy token'
    })

    assert.equal(apiGateway instanceof ApiGateway, true, 'should be instance of ApiGateway')
    assert.equal(typeof apiGateway._request, 'object', 'should have _request method')

    assert.equal(apiGateway.stats instanceof stats, true, 'should create new stats instance')
    assert.equal(apiGateway.catalog instanceof catalog, true, 'should create new catalog instance')

    assert.end()
  })

  t.end()
})
