const test = require('tape')
const utils = require('./testUtils')
const noop = function () {}

const ApiGateway = require('../lib/')
const apiGateway = new ApiGateway('dummy token')

test('Recommender.getRecommendedItems()', function (t) {
  t.equal(typeof apiGateway.recommender.getRecommendedItems, 'function', 'should have getRecommendedItems method')

  t.test('should throw if missing itemId', function (assert) {
    assert.plan(1)

    assert.throws(function () {
      noop(apiGateway.recommender.getRecommendedItems())
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

test('Recommender.getRecommendedSearches()', function (t) {
  t.equal(typeof apiGateway.recommender.getRecommendedSearches, 'function', 'should have getRecommendedSearches method')

  t.test('should throw if missing term', function (assert) {
    assert.plan(1)
    assert.throws(function () {
      noop(apiGateway.recommender.getRecommendedSearches(undefined, 'themeforest.net'))
    }, 'shoud throw')
    assert.end()
  })

  t.test('should throw if missing site', function (assert) {
    assert.plan(1)
    assert.throws(function () {
      noop(apiGateway.recommender.getRecommendedSearches('term', undefined))
    }, 'shoud throw')
    assert.end()
  })

  t.test('should get recommended search terms', function (assert) {
    var term = 'responsive'
    var site = 'themeforest.net'

    assert.plan(2)

    const getRecommendedSearchesRequest = apiGateway.recommender.getRecommendedSearches(term, site)
    assert.equal(utils.isPromise(getRecommendedSearchesRequest), true, 'should return a promise')

    getRecommendedSearchesRequest
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
