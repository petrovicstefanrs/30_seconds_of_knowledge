### transpose

> `[[a]] → [[a]]`

Transposes the rows and columns of a 2D list. When passed a list of n lists of length `x`, returns a list of `x` lists of length `n`.

`Example`

```js
R.transpose([
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
]); //=> [[1, 2, 3], ['a', 'b', 'c']]
R.transpose([
  [1, 2, 3],
  ['a', 'b', 'c'],
]); //=> [[1, 'a'], [2, 'b'], [3, 'c']]

// If some of the rows are shorter than the following rows, their elements are skipped:
R.transpose([[10, 11], [20], [], [30, 31, 32]]); //=> [[10, 20, 30], [11, 31], [32]]
```
