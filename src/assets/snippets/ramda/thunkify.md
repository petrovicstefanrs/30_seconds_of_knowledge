### thunkify

> ```((a, b, …, j) → k) → (a, b, …, j) → (() → k)```

Creates a thunk out of a function. A thunk delays a calculation until its result is needed, providing lazy evaluation of arguments.

`Example`

```js
R.thunkify(R.identity)(42)(); //=> 42
R.thunkify((a, b) => a + b)(25, 17)(); //=> 42
```