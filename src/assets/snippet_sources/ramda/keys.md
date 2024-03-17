### keys

> `{k: v} → [k]`

Returns a list containing the names of all the enumerable own properties of the supplied object. Note that the order of the output array is not guaranteed to be consistent across different JS platforms.

`Example`

```js
R.keys({ a: 1, b: 2, c: 3 }); //=> ['a', 'b', 'c']
```
