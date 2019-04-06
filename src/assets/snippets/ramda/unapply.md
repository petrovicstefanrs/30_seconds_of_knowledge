### unapply

> ```([*…] → a) → (*… → a)```

Takes a function `fn`, which takes a single array argument, and returns a function which:

Takes any number of positional arguments, passes these arguments to `fn` as an array, and returns the result.
In other words, `R.unapply` derives a variadic function from a function which takes an array. `R.unapply` is the inverse of `R.apply`.

`Example`

```js
R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
```