### apply

> ```(*… → a) → [*] → a```

Applies function `fn` to the argument list args. This is useful for creating a fixed-arity function from a variadic function. `fn` should be a bound function if context is significant.

`Example`

```js
const nums = [1, 2, 3, -99, 42, 6, 7];

R.apply(Math.max, nums); //=> 42
```