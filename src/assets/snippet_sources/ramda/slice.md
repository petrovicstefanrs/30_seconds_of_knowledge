### slice

> `Number → Number → [a] → [a]` > `Number → Number → String → String`

Returns the elements of the given list or string (or object with a slice method) from `fromIndex` (inclusive) to `toIndex` (exclusive).

Dispatches to the slice method of the third argument, if present.

`Example`

```js
R.slice(1, 3, ['a', 'b', 'c', 'd']); //=> ['b', 'c']
R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
R.slice(0, -1, ['a', 'b', 'c', 'd']); //=> ['a', 'b', 'c']
R.slice(-3, -1, ['a', 'b', 'c', 'd']); //=> ['b', 'c']
R.slice(0, 3, 'ramda'); //=> 'ram'
```
