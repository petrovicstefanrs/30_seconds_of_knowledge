### unless

> `(a → Boolean) → (a → a) → a → a`

Tests the final argument by passing it to the given predicate function. If the predicate is not satisfied, the function will return the result of calling the `whenFalseFn` function with the same argument. If the predicate is satisfied, the argument is returned as is.

`Example`

```js
let safeInc = R.unless(R.isNil, R.inc);

safeInc(null); //=> null
safeInc(1); //=> 2
```
