### pickBy

> ```((v, k) → Boolean) → {k: v} → {k: v}```

Returns a partial copy of an object containing only the keys that satisfy the supplied predicate.

`Example`

```js
const isUpperCase = (val, key) => key.toUpperCase() === key;

R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
```