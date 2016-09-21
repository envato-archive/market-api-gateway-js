const is = require('is')
const axios = require('axios')

/**
 * The APIs exposed to the user.
 * @type {Object}
 * @private
 */
var resources = {
  stats: require('./stats'),
  catalog: require('./catalog'),
  recommender: require('./recommender'),
  user: require('./user')
}

var DEFAULT_BASE_URL = 'https://api.envato.com'
var DEFAULT_TIMEOUT = 2000

/**
 * Create a new apiGateway instance with given config
 * @param {Object/String} configs
 */
function ApiGateway (config) {
  if (!config) {
    throw new Error('Access token is required.')
  }

  if (!(this instanceof ApiGateway)) {
    return new ApiGateway(config)
  }

  if (is.object(config) && is.undef(config.accessToken)) {
    throw new Error('Access token is required.')
  }

  if (is.string(config)) {
    config = {
      accessToken: config
    }
  }

  config = {
    baseURL: config.baseURL || DEFAULT_BASE_URL,
    timeout: config.timeout || DEFAULT_TIMEOUT,
    headers: {
      Authorization: 'Bearer' + ' ' + config.accessToken
    }
  }

  this._request = axios.create(config)

  this._prepResources()
}

ApiGateway.prototype = {
  _prepResources: function () {
    for (var name in resources) {
      this[name] = new resources[name](this._request)
    }
  }
}

module.exports = ApiGateway
