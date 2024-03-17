### juxt

> `[(a, b, …, m) → n] → ((a, b, …, m) → [n])`

juxt applies a list of functions to a list of values.

`Example`

```js
const getRange = R.juxt([Math.min, Math.max]);

getRange(3, 4, 9, -3); //=> [-3, 9]
```
