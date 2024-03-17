### memoizeWith

> `(*… → String) → (*… → a) → (*… → a)`

Creates a new function that, when invoked, caches the result of calling `fn` for a given argument set and returns the result. Subsequent calls to the `memoized` `fn` with the same argument set will not result in an additional call to `fn`; instead, the cached result for that set of arguments will be returned.

`Example`

```js
let count = 0;
const factorial = R.memoizeWith(R.identity, (n) => {
  count += 1;
  return R.product(R.range(1, n + 1));
});

factorial(5); //=> 120
factorial(5); //=> 120
factorial(5); //=> 120
count; //=> 1
```
