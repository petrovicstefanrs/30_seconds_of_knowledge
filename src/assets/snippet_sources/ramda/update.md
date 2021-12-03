### update

> `Number → a → [a] → [a]`

Returns a new copy of the array with the element at the provided index replaced with the given value.

`Example`

```js
R.update(1, '_', ['a', 'b', 'c']); //=> ['a', '_', 'c']
R.update(-1, '_', ['a', 'b', 'c']); //=> ['a', 'b', '_']
```
