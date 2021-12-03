### fromPairs

> `[[k,v]] → {k: v}`

Creates a new object from a list key-value pairs. If a key appears in multiple pairs, the rightmost pair is included in the object.

`Example`

```js
R.fromPairs([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]); //=> {a: 1, b: 2, c: 3}
```
