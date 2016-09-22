# market-api-gateway-js

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![js-standard-style][standard-image]][standard-url]

JavaScript SDK for Envato marketplace api-gateway

## Installation

```sh
npm install @envato-marketplace-foundation/market-api-gateway-js
```

## Documentation

For detail documentation, check [https://build.envato.com/api](https://build.envato.com/api)

## API Overview

Create a new apiGateway instance:

```js
const ApiGateway = require('@envato-marketplace-foundation/market-api-gateway-js')

const apiGateway = new ApiGateway('ACCESS_TOKEN')
// or
const apiGateway = new ApiGateway({
  accessToken: 'ACCESS_TOKEN',
  baseURL: 'new api endpint', // optional
  timeout: 3000 // optional
})
```

optional options:
  * `baseURL` _String_ api base url, default to https://api.envato.com
  * `timeout` _Integer_ request timeout, default to 2000

Each resource is under it's own category as documented on [https://build.envato.com/api/](https://build.envato.com/api/) and it return a `Promise`:

```js
apiGateway.stats.getTotalUsers()
  .then(function (res) {
    console.log('res', res)
  })
  .catch(function (err) {
    console.log('err', err)
  })
```

### Available resources & methods

* user
  * [`getAccountDetails()`](https://build.envato.com/api/#market_User)
* stats
  * [`getTotalItems()`](https://build.envato.com/api/#market_TotalItems)
  * [`getTotalUsers()`](https://build.envato.com/api/#market_TotalUsers)
* catalog
  * [`getCollectionById(id)`](https://build.envato.com/api/#market_0_Catalog_Collection)
  * [`getItemById(id)`](https://build.envato.com/api/#market_0_Catalog_Item)
  * [`searchItems(params)`](https://build.envato.com/api/#search_GET_search_item_json)
  * [`searchComments(params)`](https://build.envato.com/api/#search_GET_search_comment_json)
  * [`popularItemsBySite(site)`](https://build.envato.com/api/#market_Popular)
  * [`categoriesBySite(site)`](https://build.envato.com/api/#market_Categories)
  * [`getItemPricesById(id)`](https://build.envato.com/api/#!/market/ItemPrices)
  * [`getNewfilesBySiteAndCategory(params)`](https://build.envato.com/api/#!/market/NewFiles)
  * [`findFeaturedItemsBySite(site)`](https://build.envato.com/api/#market_Features)
  * [`randomNewItemsBySite(params)`](https://build.envato.com/api/#market_RandomNewFiles)
* recommender
  * `getRecommendedItems(itemId)`
  * `getRecommendedSearches(term, site)`

## Development

```sh
$ npm install
$ npm test
```

**Publish** to npm.

```sh
npm publish --access=public
```

If you want to publish module to npm, check the documentation at [Working with scoped packages](https://docs.npmjs.com/getting-started/scoped-packages) for more detail.

## License

MIT

[npm-image]: https://img.shields.io/npm/v/@envato-marketplace-foundation/market-api-gateway-js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@envato-marketplace-foundation/market-api-gateway-js
[travis-image]: https://img.shields.io/travis/envato/market-api-gateway-js/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/envato/market-api-gateway-js
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
