### prop

> ```s → {s: a} → a | Undefined```

Returns a function that when supplied an object returns the indicated property of that object, if it exists.

`Example`

```js
R.prop('x', {x: 100}); //=> 100
R.prop('x', {}); //=> undefined
R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
```