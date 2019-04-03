### always

> ```a → (* → a)```

Returns a function that always returns the given value. Note that for non-primitives the value returned is a reference to the original value.

This function is known as const, constant, or `K (for K combinator)` in other languages and libraries.

`Example`

```js
const t = R.always('Tee');

t(); //=> 'Tee'
```