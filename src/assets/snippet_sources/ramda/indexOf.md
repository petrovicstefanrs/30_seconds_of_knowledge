### indexOf

> `a → [a] → Number`

Returns the position of the first occurrence of an item in an array, or -1 if the item is not included in the array. `R.equals` is used to determine equality.

`Example`

```js
R.indexOf(3, [1, 2, 3, 4]); //=> 2
R.indexOf(10, [1, 2, 3, 4]); //=> -1
```
