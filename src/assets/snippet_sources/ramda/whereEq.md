### whereEq

> `{String: *} → {String: *} → Boolean`

Takes a spec object and a test object; returns `true` if the test satisfies the spec, `false` otherwise. An object satisfies the spec if, for each of the spec's own properties, accessing that property of the object gives the same value (in `R.equals` terms) as accessing that property of the spec.

`whereEq` is a specialization of where.

`Example`

```js
// pred :: Object -> Boolean
const pred = R.whereEq({ a: 1, b: 2 });

pred({ a: 1 }); //=> false
pred({ a: 1, b: 2 }); //=> true
pred({ a: 1, b: 2, c: 3 }); //=> true
pred({ a: 1, b: 1 }); //=> false
```
