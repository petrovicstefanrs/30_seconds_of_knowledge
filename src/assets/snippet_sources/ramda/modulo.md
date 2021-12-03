### modulo

> `Number → Number → Number`

Divides the first parameter by the second and returns the remainder. Note that this function preserves the `JavaScript-style` behavior for `modulo`.

`Example`

```js
R.modulo(17, 3); //=> 2
// JS behavior:
R.modulo(-17, 3); //=> -2
R.modulo(17, -3); //=> 2

const isOdd = R.modulo(R.__, 2);

isOdd(42); //=> 0
isOdd(21); //=> 1
```
