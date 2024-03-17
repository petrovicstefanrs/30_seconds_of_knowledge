### mapAccum

> `((acc, x) → (acc, y)) → acc → [x] → (acc, [y])`

The `mapAccum` function behaves like a combination of `map` and `reduce`; it applies a function to each element of a list, passing an accumulating parameter from left to right, and returning a final value of this accumulator together with the new list.

The iterator function receives two arguments, acc and value, and should return a tuple `[acc, value]`.

`Example`

```js
const digits = ['1', '2', '3', '4'];
const appender = (a, b) => [a + b, a + b];

R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
```
