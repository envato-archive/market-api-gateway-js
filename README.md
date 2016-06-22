# market-api-gateway-js
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
const ApiGateway = require('market-api-gateway-js')

const apiGateway = new ApiGateway('ACCESS_TOKEN')
// or
const apiGateway = new ApiGateway({
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  baseURL: 'new api endpint', // optional
  timeout: 3000 // optional
})
```

optional options:
  * `baseURL` _String_ api base url, default to https://api.envato.com/v1
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
  * [`randomNewItemsBySiteAndCategory(params)`](https://build.envato.com/api/#market_RandomNewFiles)
* _coming soon_

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
