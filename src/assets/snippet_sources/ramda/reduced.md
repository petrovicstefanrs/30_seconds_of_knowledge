### reduced

> `a → *`

Returns a value wrapped to indicate that it is the final value of the reduce and transduce functions. The returned value should be considered a black box. The internal structure is not guaranteed to be stable.

`Example`

```js
R.reduce(
  (acc, item) => (item > 3 ? R.reduced(acc) : acc.concat(item)),
  [],
  [1, 2, 3, 4, 5]
); // [1, 2, 3]
```
