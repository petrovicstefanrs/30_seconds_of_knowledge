### propIs

> `Type → String → Object → Boolean`

Returns `true` if the specified object property is of the given type; `false` otherwise.

`Example`

```js
R.propIs(Number, 'x', { x: 1, y: 2 }); //=> true
R.propIs(Number, 'x', { x: 'foo' }); //=> false
R.propIs(Number, 'x', {}); //=> false
```
