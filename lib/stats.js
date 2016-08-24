function Stats (request) {
  if (!(this instanceof Stats)) {
    return new Stats(request)
  }

  this._request = request
}

Stats.prototype = {
  /**
   * get total user
   * @return {Promise}
   */
  getTotalUsers: function () {
    return this._request.get('/v1/market/total-users.json')
  },

  /**
   * get total items
   * @return {Promise}
   */
  getTotalItems: function () {
    return this._request.get('/v1/market/total-items.json')
  }
}

module.exports = Stats
