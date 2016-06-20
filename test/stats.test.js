const test = require('tape')
const utils = require('./testUtils')
const noop = function () {}

const ApiGateway = require('../lib/')

test('stats resource', function (t) {
  const apiGateway = new ApiGateway('dummy token')

  t.equal(typeof apiGateway.stats.getTotalUsers, 'function', 'should have getTotalUsers method')
  t.equal(typeof apiGateway.stats.getTotalItems, 'function', 'should have getTotalItems method')

  t.test('should get total users', function (assert) {
    assert.plan(2)

    const getTotalUsersRequest = apiGateway.stats.getTotalUsers()
    assert.equal(utils.isPromise(getTotalUsersRequest), true, 'should return a promise')

    getTotalUsersRequest
      .then(function () {
        // todo: use sinon to check function not called
        noop()
      })
      .catch(function (err) {
        assert.equal(err.status, 403, 'should get 403 error')
      })
  })

  t.test('should get total items', function (assert) {
    assert.plan(2)

    const getTotalItemsRequest = apiGateway.stats.getTotalItems()
    assert.equal(utils.isPromise(getTotalItemsRequest), true, 'should return a promise')

    getTotalItemsRequest
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
