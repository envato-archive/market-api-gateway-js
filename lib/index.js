const is = require('is')
const axios = require('axios')

/**
 * The APIs exposed to the user.
 * @type {Object}
 * @private
 */
const resources = {
  stats: require('./stats'),
  catalog: require('./catalog')
}

/**
 * Create a new apiGateway instance with give confgi
 * @param {Object/String} configs
 */
function ApiGateway (config) {
  if (!(this instanceof ApiGateway)) {
    return new ApiGateway(config)
  }

  if (is.object(config) && is.undef(config.ACCESS_TOKEN)) {
    throw new Error('Access token is required.')
  }

  if (is.string(config)) {
    config = {
      ACCESS_TOKEN: config
    }
  }

  config = {
    baseURL: config.baseURL || 'https://api.envato.com/v1',
    timeout: config.timeout || 2000,
    headers: {
      Authorization: `Bearer ${config.ACCESS_TOKEN}`
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
