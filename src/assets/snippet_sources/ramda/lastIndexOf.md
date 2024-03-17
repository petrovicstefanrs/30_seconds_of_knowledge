### lastIndexOf

> `a → [a] → Number`

Returns the position of the last occurrence of an item in an array, or -1 if the item is not included in the array. `R.equals` is used to determine equality.

`Example`

```js
R.lastIndexOf(3, [-1, 3, 3, 0, 1, 2, 3, 4]); //=> 6
R.lastIndexOf(10, [1, 2, 3, 4]); //=> -1
```
