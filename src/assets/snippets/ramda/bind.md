### bind

> ```(* → *) → {*} → (* → *)```

Creates a function that is bound to a context.
Note: `R.bind` does not provide the additional argument-binding capabilities of `Function.prototype.bind`.

`Example`

```js
const log = R.bind(console.log, console);

R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
// logs {a: 2}
```