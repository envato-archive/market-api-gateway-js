# envato-api-gateway-js
JavaScript SDK for Envato marketplace api-gateway

## Installation

`npm install envato-api-gateway-js`

## Documentation

## API Overview

Create a new apiGateway instance:

```js
const ApiGateway = require('envato-api-gateway-js')

const apiGateway = new ApiGateway('ACCESS_TOKEN')
// or
const apiGateway = new ApiGateway({
  ACCESS_TOKEN: 'ACCESS_TOKEN'
})
```

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
* _coming soon_

## Development

```sh
$ npm install
$ npm test
```

## License

MIT
