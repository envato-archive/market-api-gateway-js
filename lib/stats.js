function Stats (request) {
  if (!(this instanceof Stats)) {
    return new Stats(request)
  }

  this._request = request
}

Stats.prototype = {
  getTotalUsers: function () {
    return this._request.get('/total-users.json')
      .then((response) => {
        return response['total-users']
      })
      .catch((err) => {
        if (err) {
          return {
            total_users: null
          }
        }
      })
  },

  getTotalItems: function () {
    return this._request.get('/total-items.json')
      .then((response) => {
        return response['total-items']
      })
      .catch((err) => {
        if (err) {
          return {
            total_items: null
          }
        }
      })
  }
}

module.exports = Stats
