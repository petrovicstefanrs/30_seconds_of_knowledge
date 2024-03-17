### symmetricDifference

> `[*] → [*] → [*]`

Finds the set (i.e. no duplicates) of all elements contained in the first or second list, but not both.

`Example`

```js
R.symmetricDifference([1, 2, 3, 4], [7, 6, 5, 4, 3]); //=> [1,2,7,6,5]
R.symmetricDifference([7, 6, 5, 4, 3], [1, 2, 3, 4]); //=> [7,6,5,1,2]
```
