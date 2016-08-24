var querystring = require('querystring')

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

    var qs = querystring.stringify({ id: id })
    return this._request.get('/market/catalog/collection?' + qs)
  },

  /**
   * Get item by id
   * @param  {Integer} id
   * @return {Promise}
   */
  getItemById: function (id) {
    if (!id) throw new Error('ID is required.')

    var qs = querystring.stringify({ id: id })
    return this._request.get('/market/catalog/item?' + qs)
  },

  /**
   * Search item
   * @param  {Object} params object
   * https://build.envato.com/api/#search_GET_search_item_json
   * @return {Promise}
   */
  searchItems: function (params) {
    if (typeof params !== 'object') throw new Error('Params should be an object')

    var qs = querystring.stringify(params)
    return this._request.get('/discovery/search/search/item?' + qs)
  },

  /**
   * Search comment
   * @param  {Object} params object
   * @return {Promise}
   */
  searchComments: function (params) {
    if (typeof params !== 'object') throw new Error('Params should be an object')

    var qs = querystring.stringify(params)
    return this._request.get('/discovery/search/search/comment?' + qs)
  },

  /**
   * search popular items by site
   * @param  {String/Object} site name
   * @return {Promise}
   */
  popularItemsBySite: function (site) {
    if (!site) throw new Error('Site name is required.')

    // handle object type
    if (typeof site === 'object' && site.site) {
      site = site.site
    }

    return this._request.get('/market/popular:' + site + '.json')
  },

  /**
   * Search category
   * @param  {String/Object} site
   * @return {Promise}
   */
  categoriesBySite: function (site) {
    if (!site) throw new Error('Site name is required.')

    // handle object type
    if (typeof site === 'object' && site.site) {
      site = site.site
    }

    return this._request.get('/market/categories:' + site + '.json')
  },

  /**
   * get item prices by ID
   * @param  {Integer/Object} id
   * @return {Promise}
   */
  getItemPricesById: function (id) {
    if (!id) throw new Error('Item ID is required.')

    // handle object type
    if (typeof id === 'object' && id.id) {
      id = id.id
    }

    return this._request.get('/market/item-prices:${id}.json')
  },

  /**
   * get new files by site and category
   * @param  {Object} params
   * @return {Promise}
   */
  getNewfilesBySiteAndCategory: function (params) {
    if (typeof params !== 'object') throw new Error('Params should be an object')

    var site = params.site
    var category = params.category
    return this._request.get('/market/new-files:' + site + ',' + category + '.json')
  },

  /**
   * find featured item by site
   * @param  {String/Object} site
   * @return {Promise}
   */
  findFeaturedItemsBySite: function (site) {
    if (!site) throw new Error('Site name is required.')

    // handle object type
    if (typeof site === 'object' && site.site) {
      site = site.site
    }

    return this._request.get('/market/features:' + site + '.json')
  },

  /**
   * find reandom new items by site and category
   * @param  {Object} params
   * @return {Promise}
   */
  randomNewItemsBySite: function (params) {
    if (typeof params !== 'object') throw new Error('Params should be an object')

    var site = params.site
    var category = params.category
    return this._request.get('/market/random-new-files:' + site + ',' + category + '.json')
  }
}

module.exports = Catalog
