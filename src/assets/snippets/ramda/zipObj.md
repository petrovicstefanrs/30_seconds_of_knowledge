### zipObj

> ```[String] → [*] → {String: *}```

Creates a new object out of a list of keys and a list of values. `Key/value` pairing is truncated to the length of the shorter of the two lists.

Note: `zipObj` is equivalent to `pipe(zip, fromPairs)`.

`Example`

```js
R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
```