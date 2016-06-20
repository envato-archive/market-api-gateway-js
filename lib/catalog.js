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
    return this._request.get(`/market/catalog/item?${qs}`)
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
    return this._request.get(`/discovery/search/search/item?${qs}`)
  },

  searchComments: function (params) {
    if (typeof params !== 'object') throw new Error('Params should be an object')

    const qs = querystring.stringify(params)
    return this._request.get(`/discovery/search/search/comment?${qs}`)
  },

  popularItemsBySite: function (site) {
    if (!site) throw new Error('Site name is required.')

    // handle object type
    if (typeof site === 'object' && site.site) {
      site = site.site
    }

    return this._request.get(`/market/popular:${site}.json`)
  },

  categoriesBySite: function (site) {
    if (!site) throw new Error('Site name is required.')

    // handle object type
    if (typeof site === 'object' && site.site) {
      site = site.site
    }

    return this._request.get(`/market/categories:${site}.json`)
  },

  getItemPricesById: function (id) {
    if (!site) throw new Error('Item ID is required.')

    // handle object type
    if (typeof id === 'object' && id.id) {
      id = id.id
    }

    return this._request.get(`/market/item-prices:${id}.json`)
  },

  getNewfilesBySiteAndCategory: function (params) {
    if (typeof params !== 'object') throw new Error('Params should be an object')

    const site = params.site
    const category = params.category
    return this._request.get(`/market/new-files:${site},${category}.json`)
  },

  findFeaturedItemsBySite: function (site) {
    if (!site) throw new Error('Site name is required.')

    // handle object type
    if (typeof site === 'object' && site.site) {
      site = site.site
    }

    return this._request.get(`/market/features:${site}.json`)
  },

  randomNewItemsBySiteAndCategory: function (params) {
    if (typeof params !== 'object') throw new Error('Params should be an object')

    const site = params.site
    const category = params.category
    return this._request.get(`/market/new-files:${site},${category}.json`)
  }
}

module.exports = Catalog
