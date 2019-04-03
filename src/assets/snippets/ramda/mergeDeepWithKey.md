### mergeDeepWithKey

> ```((String, a, a) → a) → {a} → {a} → {a}```

Creates a new object with the own properties of the two provided objects. If a key exists in both objects and both associated values are also objects then the values will be recursively merged.

Otherwise the provided function is applied to the key and associated values using the resulting value as the new value associated with the key. If a key only exists in one object, the value will be associated with the key of the resulting object.

`Example`

```js
let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r

R.mergeDeepWithKey(concatValues,
                   { a: true, c: { thing: 'foo', values: [10, 20] }},
                   { b: true, c: { thing: 'bar', values: [15, 35] }});
//=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
```