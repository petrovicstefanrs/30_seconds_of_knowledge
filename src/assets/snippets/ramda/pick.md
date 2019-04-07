### pick

> ```[k] → {k: v} → {k: v}```

Returns a partial copy of an object containing only the keys specified. If the key does not exist, the property is ignored.

`Example`

```js
R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4});       //=> {a: 1, d: 4}
R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4});  //=> {a: 1}
```