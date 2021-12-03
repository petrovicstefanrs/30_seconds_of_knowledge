### defaultTo

> `a → b → a | b`

Returns the second argument if it is not `null`, `undefined` or `NaN`; otherwise the first argument is returned.

`Example`

```js
const defaultTo42 = R.defaultTo(42);

defaultTo42(null); //=> 42
defaultTo42(undefined); //=> 42
defaultTo42(false); //=> false
defaultTo42('Ramda'); //=> 'Ramda'
// parseInt('string') results in NaN
defaultTo42(parseInt('string')); //=> 42
```
