var querystring = require('querystring')

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

    return this._request.get('/v1/recommendations/api/items/' + itemId)
  },

  /**
   * get related item IDs by Item ID
   * @param  {String/Object} term
   * @param  {String/Object} site
   * @return {Promise}
   */
  getRecommendedSearches: function (term, site) {
    if (!term) throw new Error('term is required.')
    // handle object type
    if (typeof term === 'object' && term.term) {
      term = term.term
    }

    if (!site) throw new Error('Site name is required.')
    // handle object type
    if (typeof site === 'object' && site.site) {
      site = site.site
    }
    var qs = querystring.stringify({ site: site })
    return this._request.get('/v1/recommendations/api/searches/' + term + '?' + qs)
  }
}

module.exports = Recommender
