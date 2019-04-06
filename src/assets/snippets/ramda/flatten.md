### flatten

> ```[a] → [b]```

Returns a new list by pulling every item out of it (and all its sub-arrays) and putting them in a new array, depth-first.

`Example`

```js
R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```