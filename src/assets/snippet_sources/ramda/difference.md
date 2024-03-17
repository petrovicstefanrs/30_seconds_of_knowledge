### difference

> `[*] → [*] → [*]`

Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list. Objects and Arrays are compared in terms of value equality, not reference equality.

`Example`

```js
R.difference([1, 2, 3, 4], [7, 6, 5, 4, 3]); //=> [1,2]
R.difference([7, 6, 5, 4, 3], [1, 2, 3, 4]); //=> [7,6,5]
R.difference([{ a: 1 }, { b: 2 }], [{ a: 1 }, { c: 3 }]); //=> [{b: 2}]
```
