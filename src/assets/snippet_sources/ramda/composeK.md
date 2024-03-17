### composeK

> `Chain m => ((y → m z), (x → m y), …, (a → m b)) → (a → m z)`

Returns the right-to-left `Kleisli` composition of the provided functions, each of which must return a value of a type supported by chain.

`R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h)`, `R.chain(g), f)`.

`Example`

```js
const get = R.curry((propName, obj) => Maybe(obj[propName]));

const getStateCode = R.composeK(
  R.compose(Maybe.of, R.toUpper),
  get('state'),
  get('address'),
  get('user')
);

getStateCode({ user: { address: { state: 'ny' } } }); //=> Maybe.Just("NY")
getStateCode({}); //=> Maybe.Nothing()
```
