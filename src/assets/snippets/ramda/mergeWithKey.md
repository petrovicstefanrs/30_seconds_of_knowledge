### mergeWithKey

> ```((String, a, a) → a) → {a} → {a} → {a}```

Creates a new object with the own properties of the two provided objects. If a key exists in both objects, the provided function is applied to the key and the values associated with the key in each object, with the result being used as the value associated with the key in the returned object.

`Example`

```js
let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r

R.mergeWithKey(concatValues,
               { a: true, thing: 'foo', values: [10, 20] },
               { b: true, thing: 'bar', values: [15, 35] });
//=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
```