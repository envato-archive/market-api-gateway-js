const querystring = require('querystring')

function Catalog (request) {
  if (!(this instanceof Catalog)) {
    return new Catalog(request)
  }

  this._request = request
}

Catalog.prototype = {
  /**
   * get collection by id
   * @param  {Integer} id
   * @return {Promise}
   */
  getCollectionById: function (id) {
    if (!id) throw new Error('ID is required.')

    const qs = querystring.stringify({ id: id })
    return this._request.get(`/market/catalog/collection?${qs}`)
  },

  /**
   * Get item by id
   * @param  {Integer} id
   * @return {Promise}
   */
  getItemById: function (id) {
    if (!id) throw new Error('ID is required.')

    const qs = querystring.stringify({ id: id })
    return this._request.get('/market/catalog/item?${qs}')
  },

  /**
   * Search item
   * @param  {Object} params object
   * https://build.envato.com/api/#search_GET_search_item_json
   * @return {Promise}
   */
  searchItems: function (params) {
    if (typeof params !== 'object') throw new Error('Params should be an object')

    const qs = querystring.stringify(params)
    return this._request.get('/discovery/search/search/item?${qs}')
  }
}

module.exports = Catalog
