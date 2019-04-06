### unfold

> ```(a → [b]) → * → [b]```

Builds a list from a seed value. Accepts an iterator function, which returns either false to stop iteration or an array of length 2 containing the value to add to the resulting list and the seed to be used in the next call to the iterator function.

The iterator function receives one argument: (seed).

`Example`

```js
const f = n => n > 50 ? false : [-n, n + 10];

R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
```