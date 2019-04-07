### pipeWith

> ```((* → *), [((a, b, …, n) → o), (o → p), …, (x → y), (y → z)]) → ((a, b, …, n) → z)```

Performs left-to-right function composition using transforming function. The leftmost function may have any arity; the remaining functions must be unary.

Note: The result of `pipeWith` is not automatically curried.

`Example`

```js
const pipeWhileNotNil = R.pipeWith((f, res) => R.isNil(res) ? res : f(res));
const f = pipeWhileNotNil([Math.pow, R.negate, R.inc])

f(3, 4); // -(3^4) + 1
```