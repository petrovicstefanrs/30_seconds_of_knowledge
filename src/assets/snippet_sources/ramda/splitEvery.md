### splitEvery

> `Number → [a] → [[a]]` > `Number → String → [String]`

Splits a collection into slices of the specified length.

`Example`

```js
R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
```
