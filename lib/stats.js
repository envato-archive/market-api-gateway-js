function Stats (request) {
  if (!(this instanceof Stats)) {
    return new Stats(request)
  }

  this._request = request
}

Stats.prototype = {
  getTotalUsers: function () {
    return this._request.get('/market/total-users.json')
      .then((response) => {
        return response['total-users']
      })
  },

  getTotalItems: function () {
    return this._request.get('/market/total-items.json')
      .then((response) => {
        return response['total-items']
      })
  }
}

module.exports = Stats
