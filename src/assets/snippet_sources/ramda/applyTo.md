### applyTo

> `a → (a → b) → b`

Takes a value and applies a function to it.

This function is also known as the thrush combinator.

`Example`

```js
const t42 = R.applyTo(42);

t42(R.identity); //=> 42
t42(R.add(1)); //=> 43
```
