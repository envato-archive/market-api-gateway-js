function Recommender (request) {
  if (!(this instanceof Recommender)) {
    return new Recommender(request)
  }

  this._request = request
}

Recommender.prototype = {
  /**
   * get related item IDs by Item ID
   * @param  {Integer/Object} ItemId
   * @return {Promise}
   */
  getRecommendedItems: function (itemId) {
    if (!itemId) throw new Error('Item ID is required.')

    // handle object type
    if (typeof itemId === 'object' && itemId.id) {
      itemId = itemId.id
    }

    return this._request.get('/recommendations/api/items/${itemId}')
  }
}

module.exports = Recommender
