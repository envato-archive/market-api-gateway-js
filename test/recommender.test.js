const test = require('tape')
const utils = require('./testUtils')
const noop = function () {}
const util = require('util')

const ApiGateway = require('../lib/')

test('recommender resource', function (t) {
  const apiGateway = new ApiGateway('dummy token')

  t.equal(typeof apiGateway.recommender.getRecommendedItems, 'function', 'should have getRecommendedItems method')

  t.test('should throw if missing itemId', function (assert) {
    assert.plan(1)
    var itemId = undefined

    assert.throws(function () {
      var itemId = undefined

      noop(apiGateway.recommender.getRecommendedItems(itemId))
    }, 'shoud throw')
    assert.end()
  })

  t.test('should get recommended Item ID(s)', function (assert) {
    var itemId = 1
    assert.plan(2)

    const getRecommendedItemsRequest = apiGateway.recommender.getRecommendedItems(itemId)
    assert.equal(utils.isPromise(getRecommendedItemsRequest), true, 'should return a promise')

    getRecommendedItemsRequest
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
