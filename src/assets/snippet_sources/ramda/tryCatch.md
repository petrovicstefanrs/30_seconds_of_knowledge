### tryCatch

> `(…x → a) → ((e, …x) → a) → (…x → a)`

`tryCatch` takes two functions, a `tryer` and a `catcher`. The returned function evaluates the `tryer`; if it does not `throw`, it simply returns the result. If the `tryer` does `throw`, the returned function evaluates the `catcher` function and returns its result. Note that for effective composition with this function, both the `tryer` and `catcher` functions must return the same type of results.

`Example`

```js
R.tryCatch(R.prop('x'), R.F)({ x: true }); //=> true
R.tryCatch(() => {
  throw 'foo';
}, R.always('catched'))('bar'); // => 'catched'
R.tryCatch(R.times(R.identity), R.always([]))('s'); // => []
```
