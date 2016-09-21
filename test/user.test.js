const test = require('tape')
const utils = require('./testUtils')
const noop = function () {}

const ApiGateway = require('../lib/')

test('user resource', function (t) {
  const apiGateway = new ApiGateway('dummy token')

  t.equal(typeof apiGateway.user.getAccountDetails, 'function', 'should have getAccountDetails method')

  t.test('should get user details', function (assert) {
    assert.plan(2)

    const getAccountDetailsRequest = apiGateway.user.getAccountDetails('donkey')
    assert.equal(utils.isPromise(getAccountDetailsRequest), true, 'should return a promise')

    getAccountDetailsRequest
      .then(function () {
        // todo: use sinon to check function not called
        noop()
      })
      .catch(function (err) {
        assert.equal(err.status, 403, 'should get 403 error')
      })
  })

  t.end()
})
