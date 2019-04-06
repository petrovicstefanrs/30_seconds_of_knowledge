### flip

> ```((a, b, c, …) → z) → (b → a → c → … → z)```

Returns a new function much like the supplied one, except that the first two arguments' order is reversed.

`Example`

```js
const mergeThree = (a, b, c) => [].concat(a, b, c);

mergeThree(1, 2, 3);          //=> [1, 2, 3]

R.flip(mergeThree)(1, 2, 3);  //=> [2, 1, 3]
```