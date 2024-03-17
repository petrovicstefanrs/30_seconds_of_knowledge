### pipeK

> `Chain m => ((a → m b), (b → m c), …, (y → m z)) → (a → m z)`

Returns the left-to-right `Kleisli` composition of the provided functions, each of which must return a value of a type supported by chain.

`R.pipeK(f, g, h)` is equivalent to `R.pipe(f, R.chain(g)`, `R.chain(h))`.

`Example`

```js
//  parseJson :: String -> Maybe *
//  get :: String -> Object -> Maybe *

//  getStateCode :: Maybe String -> Maybe String
const getStateCode = R.pipeK(
  parseJson,
  get('user'),
  get('address'),
  get('state'),
  R.compose(Maybe.of, R.toUpper)
);

getStateCode('{"user":{"address":{"state":"ny"}}}');
//=> Just('NY')
getStateCode('[Invalid JSON]');
//=> Nothing()
```
