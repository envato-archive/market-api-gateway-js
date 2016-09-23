function User (request) {
  if (!(this instanceof User)) {
    return new User(request)
  }

  this._request = request
}

User.prototype = {
  /**
   * get user account details by username
   * @param  {String} username
   * @return {Promise}
   */
  getAccountDetails: function (username) {
    if (!username) throw new Error('Username is required.')

    return this._request.get('/v1/market/user:' + username + '.json')
  }
}

module.exports = User
