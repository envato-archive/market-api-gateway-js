const utils = {
  isPromise: function (obj) {
    return !!obj.then && typeof obj.then === 'function'
  }
}

module.exports = utils
