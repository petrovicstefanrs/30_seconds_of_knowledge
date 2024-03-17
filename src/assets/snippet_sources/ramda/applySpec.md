### applySpec

> `{k: ((a, b, …, m) → v)} → ((a, b, …, m) → {k: v})`

Given a spec object recursively mapping properties to functions, creates a function producing an object of the same structure, by mapping each property to the result of calling its associated function with the supplied arguments.

`Example`

```js
const getMetrics = R.applySpec({
  sum: R.add,
  nested: { mul: R.multiply },
});

getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
```
