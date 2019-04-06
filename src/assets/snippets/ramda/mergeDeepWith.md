### mergeDeepWith

> ```((a, a) → a) → {a} → {a} → {a}```

Creates a new object with the own properties of the two provided objects. If a key exists in both objects and both associated values are also objects then the values will be recursively merged.

Otherwise the provided function is applied to associated values using the resulting value as the new value associated with the key. If a key only exists in one object, the value will be associated with the key of the resulting object.

`Example`

```js
R.mergeDeepWith(R.concat,
                { a: true, c: { values: [10, 20] }},
                { b: true, c: { values: [15, 35] }});
//=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
```