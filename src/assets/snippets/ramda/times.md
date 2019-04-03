### times

> ```(Number → a) → Number → [a]```

Calls an input function `n` times, returning an array containing the results of those function calls.

`fn` is passed one argument: The current value of `n`, which begins at 0 and is gradually incremented to `n - 1`.

`Example`

```js
R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
```