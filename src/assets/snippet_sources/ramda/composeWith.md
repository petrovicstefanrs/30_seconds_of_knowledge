### composeWith

> `((* → *), [(y → z), (x → y), …, (o → p), ((a, b, …, n) → o)]) → ((a, b, …, n) → z)`

Performs right-to-left function composition using transforming function. The rightmost function may have any arity; the remaining functions must be unary.

Note: The result of compose is not automatically curried.

`Example`

```js
const composeWhileNotNil = R.composeWith((f, res) =>
  R.isNil(res) ? res : f(res)
);

composeWhileNotNil([R.inc, R.prop('age')])({ age: 1 }); //=> 2
composeWhileNotNil([R.inc, R.prop('age')])({}); //=> undefined
```
