### pickAll

> `[k] → {k: v} → {k: v}`

Similar to pick except that this one includes a key: undefined pair for properties that don't exist.

`Example`

```js
R.pickAll(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, d: 4}
R.pickAll(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }); //=> {a: 1, e: undefined, f: undefined}
```
