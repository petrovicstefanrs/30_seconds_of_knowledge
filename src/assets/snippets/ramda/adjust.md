### adjust

> ```Number → (a → a) → [a] → [a]```

Applies a function to the value at the given index of an array, returning a new copy of the array with the element at the given index replaced with the result of the function application.

`Example`

```js
R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);   //=> ['a', 'B', 'c', 'd']
R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);  //=> ['a', 'b', 'c', 'D']
```